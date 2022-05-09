import express, { Request, Response, NextFunction }from 'express'
import usersRoute from './routes/users.route'

const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(usersRoute);



app.get('/status', (req: Request, res : Response, next : NextFunction) => {
    res.status(200).send({ foo:'API com Typescript'})
})
    
app.listen(3000, () => {
    console.log("Online at http://localhost:3000/status")
})