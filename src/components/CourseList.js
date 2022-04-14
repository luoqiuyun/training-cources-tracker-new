import React from 'react';
import Course from './Course';

export default function CourseList({ courses, refreshCourses }) {
  return (
    <div>
      <h2 className="mt-5 mb-3">Backlog</h2>
      <div className="list-group">
        {courses
          .filter((course) => !course.purchased)
          .map((course) => (
              <Course
                course={course}
                key={course.id}
                refreshCourses={refreshCourses}
              />
          ))}
      </div>
      <h2 className="mt-5 mb-3">Already Purchased</h2>
      <div className="list-group">
      {courses
        .filter((course) => course.purchased)
        .map((course) => (
          <Course
            course={course}
            key={course.id}
            refreshCourses={refreshCourses}
          />
        ))}
      </div>
      <p style={{margin:"20px 0"}}>End of the list</p>
    </div>
  );
}
