import { useState } from "react"
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa"
import RepoList from "./RepoList"

const username = typeof window !== 'undefined' ? (
    window.location.hostname === 'github.io'
        ? window.location.pathname.split('/')[1]
        : window.location.hostname.split('.')[0]
) : 'suminerProxy'

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true)

  const skills = ["React", "TypeScript", "Python", "Node.js", "WebAssembly", "Docker"]

  return (
      <div className={darkMode ? "bg-black text-white min-h-screen" : "bg-white text-black min-h-screen"} id="particles-bg">
        <div className="container mx-auto p-8">
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-bold">你好，我是 {username} 👋</h1>
            <div className="mt-2">
              <img
                  src="https://img.shields.io/badge/访客-数不清-ff69b4?logo=apacherocketmq&logoColor=white"
                  alt="visitors"
              />
            </div>
            <button onClick={() => setDarkMode(!darkMode)} className="text-xl">{darkMode ? "☀️" : "🌙"}</button>
          </div>

          <p className="mt-4 text-lg">热爱编程，专注于自动化、前端技术和 AI 项目。</p>

          <section className="mt-10">
            <h2 className="text-2xl font-semibold mb-4">🛠 技能</h2>
            <div className="flex flex-wrap gap-4">
              {skills.map((skill, idx) => (
                  <span key={idx} className="px-3 py-1 bg-gray-700 rounded-full text-sm">{skill}</span>
              ))}
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-semibold mb-4">📊 GitHub 活动</h2>
            <img
                src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=${darkMode ? "tokyonight" : "default"}`}
                alt="GitHub stats"
            />
            <img
                src={`https://github-readme-activity-graph.cyclic.app/graph?username=${username}&bg_color=${
                    darkMode ? "0d1117" : "ffffff"
                }&color=58a6ff&line=58a6ff&point=ffffff&area=true&hide_border=true`}
                alt="GitHub contribution graph"
                className="w-full max-w-4xl mt-6 rounded-lg"
            />
          </section>

          <RepoList username={username} />

          <section className="mt-10">
            <h2 className="text-2xl font-semibold mb-4">📫 联系我</h2>
            <div className="flex gap-6 text-2xl">
              <a href="mailto:your@email.com"><FaEnvelope /></a>
              <a href={`https://github.com/${username}`}><FaGithub /></a>
              <a href="https://twitter.com/yourname"><FaTwitter /></a>
              <a href="https://linkedin.com/in/yourname"><FaLinkedin /></a>
            </div>
          </section>
        </div>
      </div>
  )
}