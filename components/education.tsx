import { GraduationCap } from "lucide-react"

export function Education() {
  return (
    <section id="education" className="mb-16">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <span className="text-gray-500">{"{"}</span>
        Education
        <span className="text-gray-500">{"}"}</span>
      </h2>

      <div className="space-y-4">
        <div className="bg-gray-900 rounded-lg p-6 transition-colors">
          <div className="flex items-start gap-4">
            <GraduationCap className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <div className="flex items-start justify-between gap-4 mb-2">
                <h3 className="text-lg font-semibold text-gray-200">
                  Bachelor of Technology - Computer Science and Engineering
                </h3>
                <span className="text-sm text-gray-500 whitespace-nowrap">Oct 2022 - present</span>
              </div>
              <p className="text-gray-400">Lovely Professional University</p>
              <p className="text-sm text-gray-500">Punjab, India</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 rounded-lg p-6 transition-colors">
          <div className="flex items-start gap-4">
            <GraduationCap className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <div className="flex items-start justify-between gap-4 mb-2">
                <h3 className="text-lg font-semibold text-gray-200">Intermediate - PCM & Computer Science</h3>
                <span className="text-sm text-gray-500 whitespace-nowrap">April 2021 - March 2022</span>
              </div>
              <p className="text-gray-400">Guru Gobind Singh Public School</p>
              <p className="text-sm text-gray-500">Bokaro, Jharkhand</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
