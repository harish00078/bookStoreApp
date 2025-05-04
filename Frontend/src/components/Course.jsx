import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";

function Course() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        setCourses(res.data);
      } catch (error) {
        console.error("Failed to fetch courses:", error);
      }
    };
    fetchCourses();
  }, []);

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      {/* Header Section */}
      <div className="mt-28 text-center">
        <h1 className="text-2xl md:text-4xl font-bold">
          Welcome to Our <span className="text-pink-500">Course Library!</span>
        </h1>
        <p className="mt-6 text-gray-600 text-md md:text-lg leading-relaxed">
          Discover a wide range of courses tailored for learners at all levels.
          Whether you’re starting from scratch or aiming to upgrade your skills,
          our library covers everything from web development and programming
          to data science and UI/UX design.
        </p>
        <p className="mt-4 text-gray-600 text-md md:text-lg">
          Each course is designed by industry professionals to ensure you get
          hands-on experience and practical knowledge.
        </p>
        <Link to="/">
          <button className="mt-6 bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-600 duration-300">
            Back to Home
          </button>
        </Link>
      </div>

      {/* Course Cards */}
      <div className="mt-16">
        <h2 className="text-xl md:text-2xl font-semibold mb-6">Available Courses</h2>
        {courses.length === 0 ? (
          <p className="text-gray-500">Loading courses...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {courses.map((item) => (
              <Cards key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Course;
