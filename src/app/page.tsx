import AboutSection from "@/components/home/about-section"
import AchievementsSection from "@/components/home/achievements-section"
import TechnologiesSection from "@/components/home/technologies-section"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
      <main className="p-6 bg-zinc-900 text-white">
        <Navbar />
        <div className="mt-2">
          <AboutSection />
          <AchievementsSection />
          <TechnologiesSection />
        </div>
      </main>
  )
}