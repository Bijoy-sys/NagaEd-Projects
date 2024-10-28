const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// In-memory list of courses
let courses = [];
let nextId = 1; // Variable to generate unique IDs for courses

// Endpoint to get all courses
app.get('/api/courses', (req, res) => {
  res.json(courses);
});

// Endpoint to add a new course
app.post('/api/courses', (req, res) => {
  const { title, description, duration } = req.body;
  if (!title || !description || !duration) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  const newCourse = { id: nextId++, title, description, duration };
  courses.push(newCourse);
  res.status(201).json(newCourse);
});

// Endpoint to update a course by ID
app.put('/api/courses/:id', (req, res) => {
  const { id } = req.params;
  const { title, description, duration } = req.body;
  const course = courses.find(c => c.id === parseInt(id));

  if (!course) {
    return res.status(404).json({ message: 'Course not found' });
  }

  if (title) course.title = title;
  if (description) course.description = description;
  if (duration) course.duration = duration;

  res.json(course);
});

// Endpoint to delete a course by ID
app.delete('/api/courses/:id', (req, res) => {
  const { id } = req.params;
  const courseIndex = courses.findIndex(c => c.id === parseInt(id));

  if (courseIndex === -1) {
    return res.status(404).json({ message: 'Course not found' });
  }

  courses.splice(courseIndex, 1);
  res.status(204).end();
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});