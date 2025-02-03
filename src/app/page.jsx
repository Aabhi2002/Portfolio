import Image from "next/image";
import { SiGithub } from "react-icons/si";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin, FaFileDownload } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <div className="py-12 md:pl-40 md:pr-32 flex md:flex-row flex-col items-center md:gap-x-24 overflow-hidden">
        {/* Sidebar Section */}
        <div className="md:fixed md:left-20 lg:left-36 md:top-12 flex flex-col ml-14 md:ml-0 items-start justify-start md:w-[30vw] md:h-screen">
          <Image
            src="/Abhishek-main.jpg"
            width={150}
            height={150}
            alt="profile picture"
            className="rounded-full mb-4"
          />
          <h1 className="font-bold text-4xl mb-2">Abhishek Rajput</h1>
          <h2 className="text-[#9CA3AF] text-xl mb-4">Full Stack Developer</h2>
          <h3 className="text-[#9CA3AF] text-lg">
            📍Bangalore, India <span className="font-bold text-sm">IN</span>
          </h3>
          <p className="text-sm md:text-base opacity-90 mt-4 w-screen md:w-fit">
            Passionate about creating efficient and user-friendly applications that solve real-world problems.
          </p>
          <div className="flex text-[#9CA3AF] items-center justify-evenly gap-x-4 mt-6">
            <a
              href="https://drive.google.com/file/d/1rpkbp_cAssJecfadTTha9NPaiohfEm0g/view?usp=sharing"
              download
              className="px-4 py-1 border flex items-center gap-x-2 text-white border-white rounded-md hover:bg-white hover:text-black"
            >
              <FaFileDownload />
              Resume
            </a>

            <a href="https://github.com/Aabhi2002" aria-label="GitHub">
              <SiGithub fontSize={25} className="hover:text-white cursor-pointer" />
            </a>
            <a href="mailto:abhishekrajput90094@gmail.com" aria-label="Email">
              <IoIosMail fontSize={35} className="hover:text-white cursor-pointer" />
            </a>
            <a href="https://www.linkedin.com/in/abhishek-rajput-417025300/" aria-label="LinkedIn">
              <FaLinkedin fontSize={25} className="hover:text-white cursor-pointer" />
            </a>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="md:w-2/3 md:ml-[30vw] w-screen px-4 pt-10 md:p-0">
          {/* About Me */}
          <section>
            <h1 className="font-bold text-3xl mb-6">About Me</h1>
            <p className="my-4 text-[#D1D5DB] md:text-justify">
              Hi, I’m a Full-Stack Developer skilled in crafting seamless web experiences. My journey started with a passion for technology and has grown into a deep expertise in building impactful applications.
            </p>
            <p className="my-4 text-[#D1D5DB] md:text-justify">
              I specialize in both Frontend and Backend technologies, ensuring that every project I work on is both functional and visually appealing. My projects include creating user-friendly platforms and optimizing web performance.
            </p>
          </section>

         {/* Skills */}
<section className="mt-10">
  <h1 className="text-3xl font-bold mb-6">Skills</h1>

  {/* Programming Languages */}
  <div>
    <h2 className="font-medium text-xl mb-2">Programming Languages</h2>
    <div className="flex flex-wrap">
      {["C", "C++", "JavaScript",].map((lang) => (
        <p
          key={lang}
          className="bg-[#1E3356] text-[#3B82F6] mx-1 my-1 px-3 py-1.5 rounded-full text-[12px] font-medium"
        >
          {lang}
        </p>
      ))}
    </div>
  </div>

  {/* Frontend */}
  <div className="mt-6">
    <h2 className="font-medium text-xl mb-2">Frontend</h2>
    <div className="flex flex-wrap">
      {["HTML5", "CSS3", "Tailwind CSS", "JavaScript"].map((tech) => (
        <p
          key={tech}
          className="bg-[#164728] text-[#22C55E] mx-1 my-1 px-3 py-1.5 rounded-full text-[12px] font-medium"
        >
          {tech}
        </p>
      ))}
    </div>
  </div>

  {/* Backend */}
  <div className="mt-6">
    <h2 className="font-medium text-xl mb-2">Backend</h2>
    <div className="flex flex-wrap">
      {["Node.js", "Express.js"].map((tech) => (
        <p
          key={tech}
          className="bg-[#542121] text-[#EF4444] mx-1 my-1 px-3 py-1.5 rounded-full text-[12px] font-medium"
        >
          {tech}
        </p>
      ))}
    </div>
  </div>

  {/* Version Control */}
  <div className="mt-6">
    <h2 className="font-medium text-xl mb-2">Version Control</h2>
    <div className="flex flex-wrap">
      {["Git", "GitHub"].map((tool) => (
        <p
          key={tool}
          className="bg-[#1F2937] text-[#E5E7EB] mx-1 my-1 px-3 py-1.5 rounded-full text-[12px] font-medium"
        >
          {tool}
        </p>
      ))}
    </div>
  </div>

  {/* Frameworks */}
  <div className="mt-6">
    <h2 className="font-medium text-xl mb-2">Frameworks</h2>
    <div className="flex flex-wrap">
      {["React.js", "Express.js"].map((framework) => (
        <p
          key={framework}
          className="bg-[#164728] text-[#22C55E] mx-1 my-1 px-3 py-1.5 rounded-full text-[12px] font-medium"
        >
          {framework}
        </p>
      ))}
    </div>
  </div>

  {/* Databases */}
  <div className="mt-6">
    <h2 className="font-medium text-xl mb-2">Database Management</h2>
    <div className="flex flex-wrap">
      {["MongoDB"].map((db) => (
        <p
          key={db}
          className="bg-[#542121] text-[#EF4444] mx-1 my-1 px-3 py-1.5 rounded-full text-[12px] font-medium"
        >
          {db}
        </p>
      ))}
    </div>
  </div>

  {/* Tools */}
  <div className="mt-6">
    <h2 className="font-medium text-xl mb-2">Tools</h2>
    <div className="flex flex-wrap">
      {["Webflow", "Postman"].map((tool) => (
        <p
          key={tool}
          className="bg-[#3B82F6] text-white mx-1 my-1 px-3 py-1.5 rounded-full text-[12px] font-medium"
        >
          {tool}
        </p>
      ))}
    </div>
  </div>
</section>

{/* Projects */}
<section className="mt-10">
  <h1 className="font-bold text-3xl mb-6 text-white">Projects</h1>

  {/* Frosted Fantasy */}
  <div className="pl-6 pb-4 border-l-4 border-[#2d3748] flex gap-6 items-center hover:scale-105 transform transition-all duration-300 ease-in-out">
    <div className="w-1/3 rounded-lg shadow-lg overflow-hidden">
      <img
        src="/Cake-order.png" // Add your image path here
        alt="Cake Ordering Website"
        className="w-full h-auto transform transition-all duration-300 ease-in-out hover:scale-105"
      />
    </div>
    <div className="flex-1">
      <h2 className="font-medium text-xl md:text-2xl text-white hover:text-[#af3d29f5] transition-all duration-300 ease-in-out">
        Frosted Fantasy
      </h2>
      <p className="text-[#D1D5DB] my-0.5">
        A user-friendly platform for ordering cakes online with seamless payments via Razorpay.
      </p>
      <div className="mt-4 flex gap-4">
        <a
          href="https://cake-del.vercel.app/" // Add live project link
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Live
        </a>
        <a
          href="https://github.com/Aabhi2002/Cake_website" // Add GitHub repo link
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          GitHub
        </a>
      </div>
      {/* Tech Stack */}
      <div className="mt-4 text-sm text-white">
        <strong>Tech Stack:</strong> React, Node.js, Express, MongoDB, Razorpay, Tailwind CSS
      </div>
    </div>
  </div>

{/* Study Notion App */}
<div className="pl-6 pb-4 border-l-4 border-[#2d3748] flex gap-6 items-center mt-6 hover:scale-105 transform transition-all duration-300 ease-in-out">
    <div className="w-1/3 rounded-lg shadow-lg overflow-hidden">
      <img
        src="Studynotion.png" // Add your image path here
        alt="Study Notation App"
        className="w-full h-auto transform transition-all duration-300 ease-in-out hover:scale-105"
      />
    </div>
    <div className="flex-1">
      <h2 className="font-medium text-xl md:text-2xl text-white hover:text-[#008000] transition-all duration-300 ease-in-out">
        Study Notion App
      </h2>
      <p className="text-[#D1D5DB] my-0.5">
        Organize study notes and assignments with an easy-to-use interface for better productivity.
      </p>
      <div className="mt-4 flex gap-4">
        <a
          href="https://link-to-your-live-project.com" // Add live project link
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Live
        </a>
        <a
          href="https://github.com/your-username/study-notation-app" // Add GitHub repo link
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          GitHub
        </a>
      </div>
      {/* Tech Stack */}
      <div className="mt-4 text-sm text-white">
        <strong>Tech Stack:</strong> HTML, CSS, JavaScript, LocalStorage
      </div>
    </div>
  </div>

  {/* RBAC */}
  <div className="pl-6 pb-4 border-l-4 border-[#2d3748] flex gap-6 items-center mt-6 hover:scale-105 transform transition-all duration-300 ease-in-out">
    <div className="w-1/3 rounded-lg shadow-lg overflow-hidden">
      <img
        src="/RBAC.png" // Add your image path here
        alt="RBAC Project"
        className="w-full h-auto transform transition-all duration-300 ease-in-out hover:scale-105"
      />
    </div>
    <div className="flex-1">
      <h2 className="font-medium text-xl md:text-2xl text-white hover:text-[#FF5722] transition-all duration-300 ease-in-out">
        RBAC
      </h2>
      <p className="text-[#D1D5DB] my-0.5">
        Role-Based Access Control system to manage user permissions efficiently based on roles.
      </p>
      <div className="mt-4 flex gap-4">
        <a
          href="https://rbac-vrv-security-main.vercel.app/" // Add live project link
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Live
        </a>
        <a
          href="https://github.com/Aabhi2002/RBAC-VRV-Security-main" // Add GitHub repo link
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          GitHub
        </a>
      </div>
      {/* Tech Stack */}
      <div className="mt-4 text-sm text-white">
        <strong>Tech Stack:</strong> HTML, Tailwind CSS, React.js, Node.js
      </div>
    </div>
  </div>


  {/* Weather App */}
  <div className="pl-6 pb-4 border-l-4 border-[#2d3748] flex gap-6 items-center mt-6 hover:scale-105 transform transition-all duration-300 ease-in-out">
    <div className="w-1/3 rounded-lg shadow-lg overflow-hidden">
      <img
        src="/Weather.png" // Add your image path here
        alt="Weather App"
        className="w-full h-auto transform transition-all duration-300 ease-in-out hover:scale-105"
      />
    </div>
    <div className="flex-1">
      <h2 className="font-medium text-xl md:text-2xl text-white hover:text-[#1D4ED8] transition-all duration-300 ease-in-out">
        Weather App
      </h2>
      <p className="text-[#D1D5DB] my-0.5">
        Provides real-time weather updates for any location with an interactive and clean UI.
      </p>
      <div className="mt-4 flex gap-4">
        <a
          href="https://weather-app-yv8r.vercel.app/" // Add live project link
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Live
        </a>
        <a
          href="https://github.com/Aabhi2002/Weather-App" // Add GitHub repo link
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          GitHub
        </a>
      </div>
      {/* Tech Stack */}
      <div className="mt-4 text-sm text-white">
        <strong>Tech Stack:</strong> HTML, CSS, JavaScript, OpenWeather API
      </div>
    </div>
  </div>

  
</section>




        </div>
      </div>
    </div>
  );
}
