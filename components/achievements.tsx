import { Award, Trophy } from "lucide-react"

export function Achievements() {
  const achievements = [
    {
      title: "Entrepreneurial bootcamps",
      org: "LPU",
      date: "Sep 2024",
      description:
        "Pitched an idea at LPU's Entrepreneurial Bootcamp, earning certification and refining business skills.",
    },
    {
      title: "Pitching Pixels 2.0",
      org: "IIIT, Bangalore",
      date: "Dec 2024",
      description:
        "Secured 3rd place in Pitching Pixels 2.0 at IIIT-Bangalore for innovative solutions in Healthcare, Energy, and Fintech",
      highlight: true,
    },
    {
      title: "Startup Symphony",
      org: "IIT, Jammu",
      date: "Nov 2024",
      description:
        "Advanced to Round 2 in Startup Symphony at IIT Jammu, gaining expertise in business case analysis and strategic problem-solving",
    },
    {
      title: "Member of GDSC LPU",
      org: "Google Developer Student Clubs",
      date: "Nov 2023",
      description:
        "Volunteered at WOW Punjab through GDSC, assisting in event coordination, managing logistics, and organizing community engagement activities.",
    },
  ]

  const certificates = [
    { name: "Social network and Analysis", org: "NPTEL", date: "Sep 2024" },
    { name: "Getting started with AI and Machine Learning", org: "LinkedIn Learning", date: "Feb 2023" },
    { name: "Master SQL for data Science", org: "LinkedIn Learning", date: "Feb 2023" },
  ]

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <span className="text-gray-500">{"{"}</span>
        Achievements & Certificates
        <span className="text-gray-500">{"}"}</span>
      </h2>

      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-300">Achievements</h3>
          <div className="space-y-4">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`bg-gray-900 border rounded-lg p-5 ${
                  achievement.highlight
                    ? "border-yellow-500/50 bg-yellow-500/5"
                    : "border-gray-800 hover:border-blue-500"
                } transition-colors`}
              >
                <div className="flex items-start gap-3">
                  {achievement.highlight ? (
                    <Trophy className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                  ) : (
                    <Award className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  )}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-1">
                      <h4 className="font-semibold text-white">{achievement.title}</h4>
                      <span className="text-xs text-gray-500 whitespace-nowrap">{achievement.date}</span>
                    </div>
                    <p className="text-sm text-gray-400 mb-2">{achievement.org}</p>
                    <p className="text-sm text-gray-300 leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-300">Certificates</h3>
          <div className="space-y-3">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-lg p-4 hover:border-blue-500 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-medium text-white mb-1">{cert.name}</h4>
                    <p className="text-sm text-gray-400">{cert.org}</p>
                  </div>
                  <span className="text-xs text-gray-500 whitespace-nowrap">{cert.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
