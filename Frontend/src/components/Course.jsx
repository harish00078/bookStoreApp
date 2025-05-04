
import React from "react";
import { courses } from "../data/courses";

const Course = () => {
  return (
    <div className="p-12 max-w-screen-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Available Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="border p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{course.title}</h2>
            <p className="text-gray-600">{course.description}</p>
            <p className="text-sm text-gray-500">Duration: {course.duration}</p>
            <p className="text-sm text-gray-500">Level: {course.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Course;