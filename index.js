const express = require('express');
var cors = require('cors')
var app = express()
app.use(express.json())
app.use(cors())

const port = 5000;


const users = [
    { id: '0', name: 'shabana', email: 'shabana@gmail.com', phone: '01787373793' },
    { id: '1', name: 'sharabon', email: 'sharabon@gmail.com', phone: '01787373793' },
    { id: '2', name: 'suriya', email: 'suriya@gmail.com', phone: '01787373793' },
    { id: '3', name: 'joy', email: 'joy@gmail.com', phone: '01787373793' },
    { id: '4', name: 'roki', email: 'roki@gmail.com', phone: '01787373793' },
    { id: '5', name: 'hami', email: 'hami@gmail.com', phone: '01787373793' },
    { id: '6', name: 'jogg', email: 'jogg@gmail.com', phone: '01787373793' },

]



app.get('/users', (req, res) => {
    const search = req.query.search;
    // console.log(search)
    //use query parameter
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(searchResult)
    }
    else { res.send(users); }
})

//dynamic 
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    res.send(users[id]);
})

//app method post
app.post('/users', (req, res) => {

    const newUser=req.body;
    newUser.id=users.length;
    users.push(newUser);

    console.log('hitting post', req.body)
    res.json(newUser)
})
//home
app.get('/', (req, res) => {
    res.send('This is node-Mon first');
})


app.listen(port, () => {
    console.log(' listening on por', port)
})
