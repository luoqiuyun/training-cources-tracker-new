import React, { useEffect, useState } from 'react';

import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';

import './App.css';

function App() {
  const [courses, setCourses] = useState([]);
  const [updated, setUpdated] = useState(0);

  useEffect(() => {
    fetch('/api/courses')
    .then(response => response.json())
    .then(data => setCourses(data))
  }, [updated]);

  return (
    <div className="container mt-5">
      <h1 className="mb-5 text-center">TTTTTraining Courses Tracker</h1>
      <CourseForm courseAdded={setUpdated} />
      <CourseList courses={courses} refreshCourses={setUpdated} />
    </div>
  );
}

export default App;
