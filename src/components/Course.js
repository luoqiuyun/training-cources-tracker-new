import React from 'react';

export default function Course({ course, refreshCourses }) {
  const markCoursePurchased = async () => {
    try {
      await fetch('/api/courses', {
        method: 'PUT',
        body: JSON.stringify({ ...course, purchased: true }),
      });
      refreshCourses(Math.random() * 100);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteCourse = async () => {
    try {
      await fetch('/api/courses', {
        method: 'DELETE',
        body: JSON.stringify({ id: course.id }),
      });
      refreshCourses(Math.random() * 100);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="list-group-item">
      <div>
        <a href={course.link} target="_blank" rel="noopener noreferrer">
          <h6 className="list-group-item-heading">{course.name}</h6>
        </a>
        <p style={{marginTop:"20px"}}>
          Tags:{' '}
          {course.tags &&
            course.tags.map((tag, index) => (
              <span className="badge badge-primary mr-2" key={tag + index}>{tag}</span>
            ))}
        </p>
      </div>
      <div style={{float: "right", marginTop:"-50px"}}>
        {!course.purchased && (
          <button
              className="btn btn-sm btn-secondary"
              onClick={markCoursePurchased}
          >
              Purchased
          </button>
        )}
        <button
            className="btn btn-sm btn-danger ml-2"
            onClick={deleteCourse}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
