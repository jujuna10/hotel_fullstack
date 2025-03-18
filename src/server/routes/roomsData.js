import express from 'express';
import pool from '../database.js'
import cors from 'cors';
import { use } from 'react';

const roomsRoute = express.Router()
roomsRoute.use(cors())

roomsRoute.get('/', async (req, res) => {
    try {
      const query = 'SELECT * FROM rooms';
      const result = await pool.query(query);
      res.json(result.rows);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  });

  roomsRoute.get('/details/:id', async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ message: 'ID is required' });
    }

    try {
        const query = 'SELECT * FROM rooms WHERE id = $1'
        const result = await pool.query(query, [id])
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

roomsRoute.get('/allroom', async (req, res) => {


  try {
      const query = 'SELECT * FROM rooms'
      const result = await pool.query(query)
      res.json(result.rows);
  } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
  }
});


  export default roomsRoute;






