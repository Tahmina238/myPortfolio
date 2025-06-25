import { Badge } from "@/components/ui/badge";

export default function Skills() {
  const technologies = [
    // First row
    [
      { name: "HTML5", color: "bg-orange-500 text-white", icon: "🌐" },
      { name: "CSS3", color: "bg-blue-600 text-white", icon: "🎨" },
      { name: "JavaScript", color: "bg-yellow-400 text-black", icon: "JS" },
      { name: "TypeScript", color: "bg-blue-500 text-white", icon: "TS" },
      { name: "React", color: "bg-cyan-400 text-black", icon: "⚛️" },
      { name: "Next.js", color: "bg-black text-white", icon: "▲" },
      { name: "Tailwind CSS", color: "bg-cyan-500 text-white", icon: "💨" },
      { name: "ShadCN UI", color: "bg-gray-900 text-white", icon: "🎯" },
      { name: "Framer Motion", color: "bg-pink-500 text-white", icon: "🎬" },
      { name: "Node.js", color: "bg-green-600 text-white", icon: "📦" },
    ],
    // Second row
    [
      { name: "Express", color: "bg-gray-800 text-white", icon: "⚡" },
      { name: "MongoDB", color: "bg-green-500 text-white", icon: "🍃" },
      { name: "Git", color: "bg-red-500 text-white", icon: "📝" },
      { name: "GitHub", color: "bg-gray-900 text-white", icon: "🐙" },
      { name: "Vercel", color: "bg-black text-white", icon: "▲" },
      { name: "VS Code", color: "bg-blue-600 text-white", icon: "💻" },
    ],
  ];

  return (
    <div className="flex flex-col items-center justify-center pb-10">
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl font-semibold underline  text-center mb-8 text-blue-700">
          Languages and Tools:
        </h1>

        <div className="space-y-4">
          {technologies.map((row, rowIndex) => (
            <div key={rowIndex} className="flex flex-wrap justify-center gap-3">
              {row.map((tech, index) => (
                <Badge
                  key={index}
                  className={`${tech.color} px-4 py-2 text-sm font-medium rounded-md hover:opacity-90 transition-opacity cursor-pointer shadow-sm`}
                >
                  <span className="mr-2">{tech.icon}</span>
                  {tech.name}
                </Badge>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
