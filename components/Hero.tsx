"use client"

import { SiGithub, SiLinkedin } from "react-icons/si";
import { FileText } from "lucide-react";
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 relative overflow-hidden mt-0">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            backgroundSize: "60px 60px",
          }}
        />
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Arnav Menon
        </motion.h1>
        <motion.h2
          className="text-2xl md:text-3xl mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Software Developer & ML Engineer
        </motion.h2>
        <motion.p
          className="text-xl mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Master's student in Electrical and Computer Engineering with a focus on AI/ML Systems. Passionate about
          developing innovative solutions using cutting-edge technologies.
        </motion.p>
        <div className="flex justify-center space-x-4">
          {[
            { href: "https://github.com/Arnav-Menon", icon: SiGithub, text: "GitHub" },
            { href: "https://www.linkedin.com/in/arnav-menon/", icon: SiLinkedin, text: "LinkedIn" },
            { href: "/arnav-menon-resume.pdf", icon: FileText, text: "Resume" },
          ].map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-800 px-6 py-2 rounded-full flex items-center hover:bg-gray-100 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            >
              <link.icon className="mr-2" size={20} /> {link.text}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

