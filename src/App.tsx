import About from './components/sections/About'
import Certifications from './components/sections/Certifications'
import Contact from './components/sections/Contact'
import Education from './components/sections/Education'
import Projects from './components/sections/Projects'
import Resume from './components/sections/Resume'
import Skills from './components/sections/Skills'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Reveal from './components/Reveal'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <Projects />
        </Reveal>
        <Reveal>
          <Skills />
        </Reveal>
        <Reveal>
          <Education />
        </Reveal>
        <Reveal>
          <Certifications />
        </Reveal>
        <Reveal>
          <Resume />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
      </main>
    </>
  )
}
