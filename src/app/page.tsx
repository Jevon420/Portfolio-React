import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-xl text-gray-600 mb-8">Web Developer & Car Enthusiast</p>
        <Link href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors inline-flex items-center">
          Get in Touch <ArrowRight className="ml-2" />
        </Link>
      </section>

      <section className="grid md:grid-cols-2 gap-8 mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="text-gray-600">
            I'm a passionate web developer with a love for creating beautiful, functional websites.
            When I'm not coding, you can find me working on my latest car project or writing about automotive technology.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">My Skills</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>React & Next.js</li>
            <li>Node.js & Express</li>
            <li>MongoDB & SQL</li>
            <li>Responsive Web Design</li>
            <li>Automotive Mechanics</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((project) => (
            <div key={project} className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="h-48 bg-gray-300"></div>
              <div className="p-4">
                <h3 className="font-bold mb-2">Project {project}</h3>
                <p className="text-gray-600 mb-4">Short description of the project goes here.</p>
                <Link href={`/portfolio/${project}`} className="text-blue-600 hover:underline">
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

