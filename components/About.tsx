"use client";

import { motion } from "framer-motion";

export default function About() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
  };

  return (
    <motion.section
      id="about"
      className="py-20 bg-white"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center text-blue-800"
          variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          initial="hidden"
          animate="visible"
        >
          About Me
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto bg-blue-50 p-8 rounded-lg shadow-md"
          variants={textVariants}
        >
          <motion.p className="text-gray-700 mb-4" variants={textVariants}>
            I'm Arnav Menon, a passionate software developer and machine learning engineer currently pursuing my
            Master's in Electrical and Computer Engineering with a concentration in AI/ML Systems at Carnegie Mellon
            University. My journey in tech started with a strong foundation in Computer Engineering from the University
            of California, Riverside.
          </motion.p>
          <motion.p className="text-gray-700 mb-4" variants={textVariants}>
            Throughout my academic and professional experiences, I've worked on a wide range of projects, from
            developing scalable backend systems to implementing cutting-edge machine learning models. My expertise lies
            in developing efficient algorithms, creating robust software architectures, and implementing data-driven
            solutions.
          </motion.p>
          <motion.p className="text-gray-700" variants={textVariants}>
            I'm constantly learning and staying up-to-date with the latest technologies and best practices in both
            software development and machine learning. I'm always excited to take on new challenges and collaborate on
            interesting projects that push the boundaries of technology.
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  )
}