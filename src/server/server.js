import express from 'express';
import cors from 'cors';
import usersRoute from '../server/routes/regiandlogin.js'
import roomsRoute from '../server/routes/roomsData.js';


const app = express()
app.use(cors())
app.use(express.json())
app.use('/users', usersRoute)
app.use('/rooms',roomsRoute)

app.listen(3002,() => {
    console.log('Server is running on port 3002')
})