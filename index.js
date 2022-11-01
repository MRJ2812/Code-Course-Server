const express = require('express')
const app = express();
const cors = require('cors');
const port = 5004;

app.use(cors());

const courseinfo = require('./data/courses.json')
const courseDetails = require('./data/courseDetails.json');

app.get('/', (req, res) => {
    res.send('News API Running');
})

app.get('/courseinfo', (req, res) => {
    res.send(courseinfo);
})

app.get('/course-details', (req, res) => {
    res.send(courseDetails);
})

app.get('/course-details/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courseDetails.find(n => n.id === id);
    res.send(selectedCourse);
})

app.get('/premium/:id', (req, res) => {
    const id = req.params.id;
    const detail = courseDetails.find(detail => id === detail.id)
    res.send(detail)
})


app.listen(port, () => {
    console.log('learning hub server running')
})