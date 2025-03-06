import express from 'express';
import cors from 'cors';
import usersRoute from '../server/routes/regiandlogin.js'


const app = express()
app.use(cors())
app.use(express.json())
app.use('/users', usersRoute)

app.listen(3001,() => {
    console.log('Server is running on port 3000')
})