"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "phosphor-react"

export default function Projects() {
  const projects = [
    {
      title: "Movie Recommendation Service",
      description:
        "Designed a CI/CD pipeline with Jenkins and Docker, implemented scalable data ingestion and model training pipelines using Kafka, Docker, and FastAPI, processing over 10 million data points.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Jenkins", "Docker", "Kafka", "FastAPI", "PyTest"],
      link: "#",
    },
    {
      title: "HTTP Video Server",
      description:
        "Developed a scalable HTTP video server in Python, supporting 1,000 concurrent connections using non-blocking I/O techniques. Implemented HTTP 206 for efficient streaming of large files.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Python", "HTTP", "Concurrent Programming"],
      link: "#",
    },
    {
      title: "End-to-End Speech Recognition",
      description:
        "Developed transformer-based and encoder-decoder models for speech recognition, achieving 10.6% CER and Levenshtein distance of 4.18.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["PyTorch", "NLP", "Deep Learning"],
      link: "#",
    },
    {
      title: "Face Classification and Verification",
      description:
        "Developed and trained ResNet-50 model with custom ArcFace loss, achieving 96.5% validation accuracy and EER of 0.09.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Computer Vision", "Deep Learning", "PyTorch"],
      link: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-blue-800">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={project.link}
                  className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center"
                >
                  Learn more <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

