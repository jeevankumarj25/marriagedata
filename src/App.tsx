import React, { useState, useEffect } from "react";
import "react-image-lightbox/style.css"; // Import the lightbox CSS
import image21 from "./images/21.jpg";
import image22 from "./images/22.jpg";
import image23 from "./images/23.jpg";
import image24 from "./images/24.jpg";
import image25 from "./images/25.jpg";
import image26 from "./images/26.jpg";
import image27 from "./images/27.jpg";
import image28 from "./images/28.jpg";
import image29 from "./images/29.jpg";
import image30 from "./images/30.jpg";
import image31 from "./images/31.jpg";
import image32 from "./images/32.jpg";
import image33 from "./images/33.jpg";
import image34 from "./images/34.jpg";

const BiodataPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    image21,
    image22,
    image23,
    image24,
    image25,
    image26,
    image27,
    image28,
    image29,
    image30,
    image31,
    image32,
  ];

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handleOutsideClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeLightbox();
    }
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto"; // Disable scroll when lightbox is open

    return () => {
      document.body.style.overflow = "auto"; // Re-enable scroll on unmount
    };
  }, [isOpen]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#1a1a1a] via-[#0c0c0d] to-[#121212] text-white flex flex-col items-center p-8 md:p-10">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold mb-2 text-[#4649b2]">Jeevan Kumar N</h1>
        <h2 className="text-xl font-medium opacity-90">Software Engineer</h2>
        <p className="mt-4 text-lg opacity-80 max-w-lg mx-auto">
          Passionate, career-focused, and family-oriented individual looking for a compatible life partner.
        </p>
      </header>

      {/* About Me Section */}
      <div className="max-w-4xl w-full bg-gradient-to-br from-[#121212] via-[#4649b2] to-[#0c0d0d] rounded-xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
        <div className="flex flex-col sm:flex-row items-center gap-8">
          <div className="w-36 h-36 overflow-hidden rounded-full border-4 border-gradient-to-r from-[#4649b2] to-[#0c0d0d] shadow-lg transform transition-transform hover:scale-110 hover:shadow-2xl">
            <img
              src={image34}
              alt="Jee1"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-extrabold mb-4 text-gray-200">About Me</h3>
            <p className="text-lg max-w-xl text-gray-400">
              I enjoy traveling, exploring new cuisines, and spending quality time with my family. I value honesty,
              simplicity, and meaningful connections.
            </p>
          </div>
        </div>
      </div>

      {/* Partner Preference Section */}
      <div className="max-w-4xl w-full bg-gradient-to-br from-[#121212] via-[#4649b2] to-[#0c0d0d] rounded-xl p-8 mt-8 shadow-xl hover:shadow-2xl transition-shadow">
        <h3 className="text-2xl font-extrabold mb-4 text-gray-200">Partner Preferences</h3>
        <p className="text-lg max-w-xl text-gray-400">
          I am looking for a partner who is understanding, caring, and values family. Someone who enjoys travel and
          exploring life with positivity. Age between 22-28 years, preferably someone who is open-minded and family-oriented.
        </p>
      </div>

      {/* Hobbies Section */}
      <div className="max-w-4xl w-full bg-gradient-to-br from-[#121212] via-[#4649b2] to-[#0c0d0d] rounded-xl p-8 mt-8 shadow-xl hover:shadow-2xl transition-shadow">
        <h3 className="text-2xl font-extrabold mb-4 text-gray-200">Hobbies & Interests</h3>
        <ul className="text-lg text-gray-400 list-disc ml-5">
          <li>Traveling and exploring new places</li>
          <li>Reading books on technology and self-development</li>
          <li>Spending quality time with family and friends</li>
          <li>Learning new skills and hobbies</li>
        </ul>
      </div>

      {/* Details Section */}
      <div className="max-w-4xl w-full mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
        {[{title: "Family Details", details: ["Grandfather: Gurusamy", "Father: Narasimhulu N ", "Mother: Vijaya N", "Elder Brother: Gowtham N", "Sister-In-Law: Apoorva A", "Address: NO.396 Manjunatha Nagar, Ooorgaumpet K G F"]},
          {title: "Horoscope Details", details: ["Date of Birth: 03 July 1996", "Time of Birth: 11:43 AM", "Rashi: Makara (Capricorn)", "Nakshatra: Shravana", "Height: 5'8\""]},
          {title: "Education & Career Details", details: ["Education: Bachelor of Engineering", "Occupation: Software Engineer", "Company: IT-Guy technologies", "Experience: 5 years in software development"]},
          {title: "Lifestyle & Values", details: ["Non-smoker", "Non-drinker", "Fitness Enthusiast", "Believer in Work-Life Balance", "Family-Oriented"]},
          {title: "Hobbies", details: ["Traveling to scenic destinations", "Exploring new cuisines", "Reading technology and self-improvement books", "Playing cricket and badminton"]},
          {title: "Preferred Partner", details: ["Age: 23–27", "Height: 5'3\"–5'8\"", "Education: Graduate or higher", "Profession: Any professional background", "Location Preference: Bangalore or nearby"]},
          {title: "Location & Relocation Preference", details: ["Location Preference: Bangalore", "Open to relocation for career opportunities"]},
          {title: "Family Expectations", details: ["Supportive family with traditional values", "Open-minded approach towards modern living"]},
          {title: "Relationship Goals", details: ["Looking for a lifelong companion", "Value open communication and mutual respect", "Balance of career and family life"]} 
        ].map(({ title, details }, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-tr from-[#121212] to-[#4649b2] text-white rounded-xl p-6 border border-gray-700 shadow-md hover:shadow-2xl transition-shadow"
          >
            <h3 className="text-xl font-bold mb-4 text-gray-200">{title}</h3>
            <ul className="list-disc pl-6 text-gray-300">
              {details.map((item, index) => (
                <li key={index} className="text-lg">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Photo Gallery Section */}
      <div className="max-w-4xl w-full mt-12">
        <h3 className="text-3xl font-bold mb-6 text-center text-gray-200">Photos</h3>

        {/* Mobile Collage */}
        <div className="relative grid grid-cols-3 gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition-transform cursor-pointer"
              onClick={() => openLightbox(idx)} // Open lightbox on click
            >
              <img
                src={image}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-full object-cover rounded-lg" // Ensure images are stretched and cover their container
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-center items-center"
          onClick={handleOutsideClick} // Add the click outside listener
        >
          <div className="relative max-w-full w-full max-h-full p-4">
            <button
              className="absolute top-4 right-4 text-white text-3xl"
              onClick={closeLightbox}
            >
              &times;
            </button>
            <img
              src={images[currentIndex]}
              alt={`Lightbox Image ${currentIndex + 1}`}
              className="w-full h-auto max-h-[90vh] object-contain mx-auto" // Ensure image fits within the viewport on mobile
            />
            {/* Navigation buttons */}
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl"
              onClick={goToPrevious}
            >
              &#8592;
            </button>
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl"
              onClick={goToNext}
            >
              &#8594;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BiodataPage;
