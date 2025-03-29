import { achievements } from "@/data/achievements"

export default function AchievementsSection() {
    return (
        <section className="mb-8 sm:mb-12">
            <div className="flex items-center gap-2 mb-6 sm:mb-8">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-cyan-400 sm:w-6 sm:h-6"
                >
                    <path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z"></path>
                    <polyline points="15,9 18,9 18,11"></polyline>
                    <path d="M18 11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2"></path>
                    <rect x="8" y="5" width="8" height="4" rx="1" ry="1"></rect>
                </svg>
                <h2 className="text-xl sm:text-2xl font-bold">Logros y Metas</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {achievements.map((achievement, index) => (
                    <div
                        key={index}
                        className="bg-zinc-800 rounded-lg p-4 sm:p-6 text-center transform transition-transform hover:scale-105"
                    >
                        <div className="text-3xl sm:text-4xl font-bold text-cyan-400">{achievement.value}</div>
                        <div className="text-gray-300 mt-2 text-sm sm:text-base">{achievement.label}</div>
                        <div className="mt-3 sm:mt-4 h-1 w-12 sm:w-16 bg-cyan-400 mx-auto"></div>
                    </div>
                ))}
            </div>
        </section>
    )
}