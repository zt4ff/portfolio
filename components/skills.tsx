import { Card, CardContent } from "@/components/ui/card"
import { Database, Layout, Server, Terminal, Cloud, Layers } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout className="h-6 w-6 text-primary" />,
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS", "Redux", "React Query"],
    },
    {
      title: "Backend Development",
      icon: <Server className="h-6 w-6 text-primary" />,
      skills: ["Node.js", "Express", "NestJS", "Python", "Django", "REST APIs", "GraphQL", "WebSockets"],
    },
    {
      title: "Database",
      icon: <Database className="h-6 w-6 text-primary" />,
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Prisma", "Mongoose", "SQL", "NoSQL"],
    },
    {
      title: "DevOps & Cloud",
      icon: <Cloud className="h-6 w-6 text-primary" />,
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Vercel", "Netlify", "Heroku"],
    },
    {
      title: "Tools & Methodologies",
      icon: <Terminal className="h-6 w-6 text-primary" />,
      skills: ["Git", "Agile", "Scrum", "TDD", "Jest", "Cypress", "Storybook", "Figma"],
    },
    {
      title: "Architecture",
      icon: <Layers className="h-6 w-6 text-primary" />,
      skills: [
        "Microservices",
        "Serverless",
        "MVC",
        "Clean Architecture",
        "DDD",
        "Event-Driven",
        "API Design",
        "System Design",
      ],
    },
  ]

  return (
    <section id="skills" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Skills</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Technical Expertise</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              With over 6 years of experience, I've developed a diverse skill set across the full software development
              stack.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {skillCategories.map((category, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="rounded-full bg-primary/10 p-2">{category.icon}</div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
