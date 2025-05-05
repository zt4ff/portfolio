import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Kayode Oluwasegun
              </h1>
              <p className="text-xl text-muted-foreground">
                Fullstack Engineer with 6+ years of experience
              </p>
            </div>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Building innovative solutions across multiple industries.
              Passionate about open source and creating impactful applications.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild>
                <Link href="#projects">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <a href="/kayode-oluwasegun-cv.pdf" download>
                  Download my CV
                </a>
              </Button>
            </div>
            <div className="flex gap-4 mt-4">
              <Button variant="ghost" size="icon" asChild>
                <Link
                  href="https://www.linkedin.com/in/oluwasegun-kayode/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link
                  href="https://github.com/zt4ff"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link
                  href="https://x.com/zt4ff"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative aspect-square overflow-hidden rounded-full border-8 border-muted w-[280px] h-[280px] md:w-[400px] md:h-[400px]">
              <img
                src="/kayode.jpg"
                alt="Kayode Oluwasegun"
                className="object-cover"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
