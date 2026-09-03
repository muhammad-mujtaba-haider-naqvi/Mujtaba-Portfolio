import Hero from './components/Hero'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <section
          className="min-h-[55vh] bg-night"
          aria-label="Portfolio content coming soon"
        />
      </main>
    </>
  )
}
