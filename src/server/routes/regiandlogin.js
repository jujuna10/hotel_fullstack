import express from 'express';
import pool from '../database.js'
import cors from 'cors';
import { use } from 'react';

const usersRoute = express.Router()
usersRoute.use(cors())





usersRoute.post('/registration', (req, res) => {
    const {name,email,password} = req.body
    if (!name || !email || !password) {
        return res.status(400).send('All fields are required');
    }

    const insert = 'INSERT INTO registration (name,email,password) VALUES ($1, $2, $3)';

    pool.query(insert, [name, email, password])
        .then((response) => {
            console.log('Data saved successfully');
            res.status(200).send('Data saved successfully');
        })
        .catch((err) => {
            console.error('Database Error:', err);
            res.status(500).send(`Database error: ${err.message}`);
        });
})

export default usersRoute

usersRoute.post('/login', (req,res) => {
    const {email,password} = req.body;

    const insert = 'SELECT * FROM registration WHERE email = $1';
    
    pool
        .query(insert, [email])
        .then((response) => {
            if(response.rows.length === 0){
                return res.status(401).json({message: 'nof found'})
            }
            const user = response.rows[0]
            if(user.email !== email){
                return res.json({message: 'noemail'})
            }else if(user.password !== password){
                return res.json({message: 'nopass'})
            }
            res.status(200).json({name: user.name, email:user.email})
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ message: 'server error' });
        });
});