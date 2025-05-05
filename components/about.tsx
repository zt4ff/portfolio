import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, GraduationCap, Award } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              About Me
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Who I Am
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I'm a passionate fullstack engineer with over 6 years of
              experience working across multiple industries. I specialize in
              building scalable web applications.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <div className="rounded-full bg-primary/10 p-4">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Experience</h3>
              <p className="text-muted-foreground">
                6+ years of professional experience working with startups,
                enterprises, and everything in between.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <div className="rounded-full bg-primary/10 p-4">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Education</h3>
              <p className="text-muted-foreground">
                Computer Science degree with continuous learning through
                professional development and certifications.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <div className="rounded-full bg-primary/10 p-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Open Source</h3>
              <p className="text-muted-foreground">
                Active contributor to open source projects, creating tools and
                libraries used by developers worldwide.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="mt-16 space-y-6 md:space-y-8">
          <h3 className="text-2xl font-bold text-center">
            Professional Journey
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-lg bg-muted px-3 py-1 text-sm">
                <Briefcase className="h-4 w-4" />
                <span>Jan 2022 - Present</span>
              </div>
              <h4 className="text-xl font-bold">Fullstack Engineer, Qshop</h4>
              <p className="text-muted-foreground">
                Leading development of enterprise applications, mentoring junior
                developers, and implementing best practices for scalable
                architecture.
              </p>
            </div>
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-lg bg-muted px-3 py-1 text-sm">
                <Briefcase className="h-4 w-4" />
                <span>July 2021 - Oct 2022</span>
              </div>
              <h4 className="text-xl font-bold">
                Frontend Developer, Garmatsch Software, Berlin
              </h4>
              <p className="text-muted-foreground">
                Developed and maintained web applications for clients across
                fintech, healthcare, and e-commerce sectors.
              </p>
            </div>
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-lg bg-muted px-3 py-1 text-sm">
                <Briefcase className="h-4 w-4" />
                <span>July 2021 - Oct 2022</span>
              </div>
              <h4 className="text-xl font-bold">
                Frontend Developer, Coder Consulting, Berlin
              </h4>
              <p className="text-muted-foreground">
                Built responsive user interfaces and implemented complex UI/UX
                designs for web applications.
              </p>
            </div>
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-lg bg-muted px-3 py-1 text-sm">
                <GraduationCap className="h-4 w-4" />
                <span>Education</span>
              </div>
              <h4 className="text-xl font-bold">Accounting</h4>
              <p className="text-muted-foreground">
                Bachelor's degree in accounting with focus in accounting
                information technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
