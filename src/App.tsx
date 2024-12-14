// App.tsx
import React, { useEffect, useState } from "react";
import "./App.css"; // Custom CSS for fonts and shadows

const BiodataPage: React.FC = () => {
  const [gradient, setGradient] = useState<string>(
    "from-pink-200 via-purple-300 to-indigo-400"
  );

  // Function to change the gradient every 5 seconds
  const getRandomGradient = () => {
    const gradients = [
      "from-pink-200 via-purple-300 to-indigo-400",
      "from-blue-200 via-green-300 to-yellow-400",
      "from-teal-300 via-cyan-400 to-blue-500",
      "from-rose-400 via-peach-300 to-pink-200",
    ];
    const randomIndex = Math.floor(Math.random() * gradients.length);
    return gradients[randomIndex];
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setGradient(getRandomGradient());
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div
      className={`min-h-screen bg-gradient-to-r ${gradient} text-white flex flex-col items-center p-8 transition-all duration-1000 relative overflow-hidden`}
    >
      {/* Diagonal "sunshine" animation */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-300 via-orange-400 to-pink-600 opacity-20 animate-sunshine"></div>

      {/* Profile Section */}
      <div className="flex flex-col sm:flex-row items-center mb-12 w-full max-w-5xl">
        <div className="w-40 h-40 overflow-hidden rounded-full shadow-2xl transform hover:scale-105 transition duration-500 sm:mr-8 mb-4 sm:mb-0">
          <img
            src="https://i.imghippo.com/files/yUh5255rAc.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center sm:text-left">
          <h1 className="text-5xl font-bold mb-2 title-shadow font-oswald text-black">
            Jeevan Kumar N
          </h1>
          <h2 className="text-2xl font-medium text-gray-100 font-poppins text-black">
            Software Engineer
          </h2>
          <p className="text-lg text-gray-200 mt-4 font-poppins text-black">
            Passionate, career-focused, and family-oriented individual looking
            for a compatible life partner.
          </p>
        </div>
      </div>

      {/* Details Section */}
      <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 gap-8">
        {[
          {
            title: "Family Details",
            content: (
              <ul className="space-y-2">
                <li><strong>Grandfather:</strong> Gurusamy</li>
                <li><strong>Father:</strong> Narasimhulu N (9876543210)</li>
                <li><strong>Mother:</strong> Vijaya N</li>
                <li><strong>Elder Brother:</strong> Gowtham N</li>
                <li><strong>Sister-In-Law:</strong> Apoorva A</li>
                <li><strong>Address:</strong> NO.396 Manjunatha Nagar Ooorgaumpet</li>
              </ul>
            ),
          },
          {
            title: "Horoscope Details",
            content: (
              <ul className="space-y-2">
                <li><strong>Date of Birth:</strong> 03 July 1996</li>
                <li><strong>Time of Birth:</strong> 11:43 PM</li>
                <li><strong>Rashi:</strong> Vrishabha (Taurus)</li>
                <li><strong>Nakshatra:</strong> Rohini</li>
                <li><strong>Height:</strong> 5'8"</li>
              </ul>
            ),
          },
          {
            title: "Hobbies",
            content: (
              <ul className="space-y-2">
                <li>Traveling to scenic destinations</li>
                <li>Exploring new cuisines</li>
                <li>Reading technology and self-improvement books</li>
                <li>Playing cricket and badminton</li>
              </ul>
            ),
          },
          {
            title: "Preferred Partner",
            content: (
              <ul className="space-y-2">
                <li>Age: 23–27</li>
                <li>Height: 5'3"–5'8"</li>
                <li>Education: Graduate or higher</li>
                <li>Profession: Any professional background</li>
                <li>Location Preference: Bangalore or nearby</li>
              </ul>
            ),
          },
        ].map(({ title, content }, index) => (
          <div
            key={index}
            className="p-6 rounded-xl shadow-lg bg-white bg-opacity-10 border-l-4 border-yellow-400 text-gray-900"
          >
            <h3 className="text-xl font-semibold mb-4 font-oswald title-shadow">
              {title}
            </h3>
            {content}
          </div>
        ))}
      </div>

      {/* Photo Gallery Section */}
      <div className="mt-12 w-full max-w-5xl">
        <h3 className="text-3xl font-bold mb-1 text-center drop-shadow-md font-oswald title-shadow">
          Photos
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
          {[
            { url: "https://i.imghippo.com/files/kA5262Qdw.jpg", offset: "-translate-y-4" },
            { url: "https://i.imghippo.com/files/a5178KU.jpg", offset: "translate-y-6" },
            { url: "https://i.imghippo.com/files/Bymw8070oVA.jpg", offset: "-translate-y-10" },
            { url: "https://i.imghippo.com/files/LcK4161nYE.jpg", offset: "translate-y-2" },
            { url: "https://i.imghippo.com/files/JAQM9125mvc.jpg", offset: "-translate-y-8" },
          ].map((image, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-lg shadow-lg transform transition-transform duration-500 ${image.offset}`}
              style={{ width: "150px", height: "200px" }}
            >
              <img
                src={image.url}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BiodataPage;
