const express = require('express');
const router = express.Router();

let students = [
    {id: 1, name: 'Dan'},
    {id: 2, name: 'Karen'},
    {id: 3, name: 'Christina'},
    {id: 4, name: 'Adam'},
    {id: 5, name: 'Duc'},
    {id: 6, name: 'Jay'},
    {id: 7, name: 'June'},
    {id: 8, name: 'Noah'},
    {id: 9, name: 'Chris'}
]

let everyStudent = students.map((student) => {
    return student.name
});


router.get('/', (req,res,next) => {
    res.send(everyStudent)
})


router.get('/:id', (req,res,next) => {
    res.send(everyStudent[req.params.id - 1])
})


router.post('/', (req,res,next) => {
    students.push({id: students.length + 1, name: req.body.name})
    res.send(students)
})


router.put('/:id', (req,res,next) => {
    students[req.params.id-1].name = req.body.name
    res.send(students)
})


router.delete('/:id', (req,res,next) => {
    students.splice(req.params.id-1, 1)
    res.send(students)
})


// module.exports = { students, router }
module.exports = router