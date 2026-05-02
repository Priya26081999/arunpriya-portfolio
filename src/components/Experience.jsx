export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-400 mb-4">
            Experience
          </h2>

          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            My professional internship experience focused on frontend development,
            responsive UI design, and building modern web applications.
          </p>
        </div>

        {/* Experience Card */}
        <div className="group bg-slate-900/80 border border-slate-800 rounded-3xl p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-emerald-500/20 hover:border-emerald-500/20">

          {/* Top Section */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">

            <div>
              <h3 className="text-2xl font-semibold text-emerald-300 mb-2">
                Frontend Developer Intern
              </h3>

              <p className="text-slate-300 text-base">
                Stairs7Solutions Private Limited
              </p>
            </div>

            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-300 text-sm border border-emerald-500/20">
                Jan 2026 - Apr 2026
              </span>
            </div>
          </div>

          {/* Description */}
          <ul className="space-y-4 text-slate-300 leading-relaxed text-sm md:text-base">

            <li className="flex gap-3">
              <span className="text-emerald-400 mt-1">•</span>
              <span>
                Developed responsive frontend interfaces using React.js and TypeScript.
              </span>
            </li>

            <li className="flex gap-3">
              <span className="text-emerald-400 mt-1">•</span>
              <span>
                Built reusable UI components and improved application responsiveness.
              </span>
            </li>

            <li className="flex gap-3">
              <span className="text-emerald-400 mt-1">•</span>
              <span>
                Collaborated with developers using GitHub and modern frontend workflows.
              </span>
            </li>

          </ul>
        </div>
      </div>
    </section>
  );
}