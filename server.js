const express = require('express')
const app = express()
const port = 3000

// Listener
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`)
})

// Define Home Routes
app.get('/', (req, res) => {
    res.send('<h1> Build 10 Routes </h1>')
})

// Routes from 1 of 10
app.get('/1', (req, res) => {
    res.send('<h1> 1st Route </h1>')
})

// Routes from 2 of 10
app.get('/2', (req, res) => {
    res.send('<h1> 2nd Route </h1>')
})

// Routes from 3 of 10
app.get('/3', (req, res) => {
    res.send('<h1> 3rd Route </h1>')
})

// Routes from 4 of 10
app.get('/4', (req, res) => {
    res.send('<h1> 4th Route </h1>')
})

// Routes from 5 of 10
app.get('/5', (req, res) => {
    res.send('<h1> 5th Route </h1>')
})

// Routes from 6 of 10
app.get('/6', (req, res) => {
    res.send('<h1> 6th Route </h1>')
})

// Routes from 7 of 10
app.get('/7', (req, res) => {
    res.send('<h1> 7th Route </h1>')
})

// Routes from 8 of 10
app.get('/8', (req, res) => {
    res.send('<h1> 8th Route </h1>')
})

// Routes from 9 of 10
app.get('/9', (req, res) => {
    res.send('<h1> 9th Route </h1>')
})

// Routes from 10 of 10
app.get('/10', (req, res) => {
    res.send('<h1> 10th Route </h1>')
})



// Array of student objects
// const students = [
//     { id: 1, name: 'Sterling' },
//     { id: 2, name: 'Omari' },
//     { id: 3, name: 'Garrett' },
//     { id: 4, name: 'EJ' },
//     { id: 5, name: 'Pauline' },
    // ... add more students
// ]

// Show route to display a single student
// app.get('/students/:id', (req, res) => {
//     console.log(`The value for the :id route parameter is: ${req.params.id}`);
//     const studentId = req.params.students.id

    // if (req.params.id > 0) {
    //     res.send(`
    //     <h1>${req.params.id} Student </h1> 
    //     <br> 
    //     <a href='/${req.params.id - 1}'> Next Student </a>
    //     `)
    // } else {
    //     res.send(`
    //     <h1>${req.params.id - 1} Student </h1> <br>
    //     <a href='/'> Start Over </a>
    //     `)
    // } else (!student) {
    //     return res.status(404).send('Student not found.');
    // }

//     res.render('students/show');
// })

// Index route to display a list of all students
// app.get('/students', (req, res) {
//     const studentLinks = students.map(id => ({
//         id,
//         name: students[id].name
//     }));

//     res.render('students/index');
// });
