
// import React from "react";import React from "react";
// import { courses } from "../data/courses";

// const Course = () => {
//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Available Courses</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {courses.map((course) => (
//           <div
//             key={course.id}
//             className="border p-4 rounded-lg shadow hover:shadow-lg transition"
//           >
//             <h2 className="text-xl font-semibold">{course.title}</h2>
//             <p className="text-gray-600">{course.description}</p>
//             <p className="text-sm text-gray-500">Duration: {course.duration}</p>
//             <p className="text-sm text-gray-500">Level: {course.level}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Course;
// import React from "react";
// import Course from "./components/Course";

// function App() {
//   return (
//     <div className="App">
//       <Course />
//     </div>
//   );
// }

// export default App;

// const Contact = () => {
//   return (
//     <div className="max-w-screen-lg mx-auto p-6 pt-20">
//       <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
//       <p className="text-center text-gray-600 mb-8">
//         Have questions or need assistance? Feel free to reach out to us using the form below.
//       </p>
//       <form className="space-y-6">
//         <div>
//           <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//             Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
//             placeholder="Your Name"
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
//             placeholder="Your Email"
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="message" className="block text-sm font-medium text-gray-700">
//             Message
//           </label>
//           <textarea
//             id="message"
//             name="message"
//             rows="4"
//             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
//             placeholder="Your Message"
//             required
//           ></textarea>
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 transition duration-300"
//         >
//           Send Message
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Contact;
import React from "react";
import { courses } from "../data/courses";

const Course = () => {
  return (
    <div className="p-6">
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