import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FiExternalLink, FiGithub } from "react-icons/fi";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

import { fadeIn, textVariant } from "../utils/motion";
import { projectsData } from "../constants";

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  live_site_link,
  source_code_link,
  video_url,
}) => {
  // Add error state for image loading
  const [imageError, setImageError] = useState(false);

  const getEmbedUrl = (url) => {
    if (!url) return null;
    
    // Handle youtu.be format
    if (url.includes('youtu.be')) {
      const videoId = url.split('/').pop().split('?')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    
    // Handle youtube.com format
    if (url.includes('youtube.com/watch')) {
      const videoId = new URL(url).searchParams.get('v');
      return `https://www.youtube.com/embed/${videoId}`;
    }
    
    // Return original URL if not a recognized YouTube format
    return url;
  };

  return (
    <div className="flex flex-col lg:flex-row w-full bg-[#0a0a14] rounded-lg overflow-hidden mb-10">
      {/* Left side - Project Info */}
      <div className="p-8 lg:w-1/2 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center overflow-hidden">
              <img
                src={image}
                alt="project icon"
                className="w-10 h-10 object-contain"
                onError={() => setImageError(true)}
              />
              {imageError && <div className="w-10 h-10 bg-gray-700 flex items-center justify-center text-xs text-gray-400">No Image</div>}
            </div>
            
            <div className="flex space-x-2">
              {live_site_link && (
                <a
                  href={live_site_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-sm bg-[#1f1f2e] px-4 py-2 rounded hover:bg-[#2e2e40] transition flex items-center"
                >
                  <FiExternalLink className="mr-2" /> Demo
                </a>
              )}
              
              {source_code_link && (
                <a
                  href={source_code_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-sm bg-[#1f1f2e] px-4 py-2 rounded hover:bg-[#2e2e40] transition flex items-center"
                >
                  <FiGithub className="mr-2" /> Code
                </a>
              )}
            </div>
          </div>

          <h3 className="text-white font-bold text-[28px] mb-4">{name}</h3>
          
          <p className="text-secondary text-[16px] leading-[26px] mb-6">
            {description}
          </p>

          <div className="flex items-center justify-between flex-wrap gap-5 mb-8">
            <div className="flex items-center gap-3">
              {tags && tags.map((tag, tagIndex) => (
                <div key={tagIndex} className="tech-logo w-10 h-10 rounded-md bg-gray-800 flex items-center justify-center">
                  <img 
                    src={tag.path} 
                    alt={tag.name} 
                    className="w-6 h-6 object-contain"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.display = 'none';
                      e.target.parentNode.innerHTML = tag.name;
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Media (Video or Picture) */}
      <div className="lg:w-1/2 h-[400px] relative overflow-hidden bg-gray-900">
        {video_url ? (
          <iframe
          src={getEmbedUrl(video_url)}
          title={`${name} video`}
          className="w-full h-full object-cover"
          allowFullScreen
        />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <img
              src={image}
              alt="project preview"
              className="max-w-full max-h-full object-contain"
              onError={() => setImageError(true)}
            />
            {imageError && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800 text-gray-400">
                Image not available
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const Works = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const navigateProject = (direction) => {
    if (direction === "next") {
      setCurrentProjectIndex((prev) => (prev === projectsData.length - 1 ? 0 : prev + 1));
    } else {
      setCurrentProjectIndex((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1));
    }
  };

  return (
    <section>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-left`}>🚀My work</p>
        <h2 className={`${styles.sectionHeadText} text-left`}>Projects</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-5xl leading-[30px]'
        >
          Each project below is a reflection of my learning, creativity, and hands-on experience. You’ll find live demos, source code repositories, presentation decks, and walkthrough videos — depending on what’s available for each. These projects highlight my problem-solving mindset, adaptability across tech stacks, and ability to communicate ideas clearly through both code and presentation.
        </motion.p>
      </div>

      <div className='mt-20 relative'>
        {/* Project identifier */}
        <div className="text-xs text-gray-500 mb-2">
          Project {currentProjectIndex + 1} of {projectsData.length}: {projectsData[currentProjectIndex].name}
        </div>
        
        {/* Project card with animations */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProjectIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ProjectCard 
              index={currentProjectIndex} 
              {...projectsData[currentProjectIndex]} 
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Navigation controls at the bottom */}
        <div className="flex items-center justify-center mt-4 space-x-8">
          {/* Previous button */}
          <button 
            onClick={() => navigateProject("prev")}
            className="bg-black/30 hover:bg-black/50 p-3 rounded-full transition-all duration-300"
            aria-label="Previous project"
          >
            <FiChevronLeft className="text-white w-6 h-6" />
          </button>
          
          {/* Indicator dots */}
          <div className="flex space-x-2">
            {projectsData.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentProjectIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentProjectIndex === idx ? "bg-white" : "bg-gray-600 hover:bg-gray-400"
                }`}
                aria-label={`Go to project ${idx + 1}`}
              />
            ))}
          </div>
          
          {/* Next button */}
          <button 
            onClick={() => navigateProject("next")}
            className="bg-black/30 hover:bg-black/50 p-3 rounded-full transition-all duration-300"
            aria-label="Next project"
          >
            <FiChevronRight className="text-white w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Works, "projects");