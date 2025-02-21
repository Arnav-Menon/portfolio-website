import { Code, Database, Server, Cpu, BarChart } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      name: "Programming Languages",
      icon: Code,
      skills: ["Python", "C/C++", "Java", "JavaScript"],
    },
    {
      name: "Frameworks & Libraries",
      icon: Database,
      skills: ["Spring Boot", "Django", "Flask", "FastAPI", "PyTorch", "Sklearn"],
    },
    {
      name: "Tools & Platforms",
      icon: Server,
      skills: ["Docker", "Jenkins", "DynamoDB", "Jupyter Notebooks", "Postman", "Google Test"],
    },
    {
      name: "Machine Learning",
      icon: Cpu,
      skills: ["Deep Learning", "Computer Vision", "NLP", "Weights & Biases"],
    },
    {
      name: "Other Skills",
      icon: BarChart,
      skills: ["Computer Networks", "Embedded Systems", "VLSI Design"],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <category.icon className="text-blue-600 mr-2" size={24} />
                <h3 className="text-xl font-semibold text-blue-800">{category.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

