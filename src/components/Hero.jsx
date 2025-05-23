import { motion } from "framer-motion";
import { FaLongArrowAltRight } from "react-icons/fa";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-96 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, <br className='sm:block hidden' /> I'm <span className='text-[#915EFF]'>Hemashree M S</span>
          </h1>
          <p className={`${styles.heroSubText} mt-8 text-white-100`}>
          I love to build web applications.<br className='sm:block hidden' /> I am looking for more opportunities to grow and upskill myself.
          </p>
          <a href="#projects" smooth duration={500} className='group bg-gradient-to-r from-purple-500 to-purple-800 cursor-pointer w-fit flex items-center text-lg h-10 px-6 py-3 my-12 rounded-md hover:scale-105 duration-500'>Portfolio <span className='group-hover:rotate-90 duration-500'><FaLongArrowAltRight className='ml-2'/></span></a>
        </div>

      </div>

      

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
