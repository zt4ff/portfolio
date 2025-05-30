"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar } from "lucide-react";
import Link from "next/link";

export default function TabbedPortfolio() {
  const [activeTab, setActiveTab] = useState("featured");

  const featuredProjects = [
    {
      title: "QShop E-Commerce Adminstration Dashboard",
      description:
        "A full-featured e-commerce administration with product management, discount management, cart functionality, payment processing, automated deliveries and order tracking, etc.",
      image: "/qshop.png",
      tags: ["Nextjs", "Node", "MongoDB", "Stripe", "Nestjs"],
      liveUrl: "https://app.qshop.tech/",
    },
    {
      title: "QShop E-Commerce Storefront",
      description:
        "A storefront interface for e-commerce stores managed on the Qshop Adminstration Dashboard.",
      image: "/storefront.png",
      tags: ["Nextjs", "Node", "MongoDB", "Stripe", "Nestjs"],
      liveUrl: "https://sample-109954.qshop.ng/",
    },
    {
      title: "McMakler",
      description:
        "An online real estate brokage application for residential and commercial spaces in Germany",
      image: "/mcmakler.png",
      tags: ["React", "Express", "PostgreSQL", "TypeScript", "Docker"],
      liveUrl: "https://www.mcmakler.de/",
    },
    {
      title: "QShop's Landing Page",
      description:
        "A landing page of an ecommerce platform showcasing the features of the web application",
      image: "/qshop-landing.png",
      tags: ["Wordpress", "PHP", "Elementor"],
      liveUrl: "https://qshop.tech/",
    },
    {
      title: "Ekiti LMIS Landing Page",
      description:
        "The official landing page of Ekiti State's labour market information system",
      image: "/ekiti-landing.png",
      tags: ["Wordpress", "PHP", "Elementor"],
      liveUrl: "https://eklmis.ek.gov.ng/",
    },
    {
      title: "Ekiti LMIS Job Seekers Application",
      description:
        "The Ekiti State's labour market information system interface for job seekers",
      image: "/job-seeker.png",
      tags: ["NestJS", "NextJS", "Typescript"],
      liveUrl: "https://jobseekers.eklmis.ek.gov.ng/",
    },
    {
      title: "Ekiti LMIS Employers Application",
      description:
        "The Ekiti State's labour market information system interface for employers",
      image: "/employers.png",
      tags: ["NestJS", "NextJS", "Typescript"],
      liveUrl: "https://employers.eklmis.ek.gov.ng/",
    },
  ];

  const otherProjects = [
    {
      title: "Touch Alias",
      description:
        "A CLI tool to create files quickly and automatically create the path if the directories do not exist.",
      tags: ["npm", "Ndode", "Bash"],
      liveUrl: "https://www.npmjs.com/package/touch-alias",
      githubUrl: "https://github.com/zt4ff/touch-alias",
    },
  ];

  const articles = [
    {
      title: "A Complete Guide on how to run Mocha npm Testing with Node.js",
      description:
        "In this Mocha NodeJS tutorial, you will get in-depth insights on how to write assertions using the NodeJS assert module while performing Selenium automation testing with Mocha framework",
      date: "January 16, 2023",
      tags: ["Testing", "Quality Assurance", "Mocha", "npm"],
      url: "https://www.lambdatest.com/blog/mocha-nodejs-tutorial/",
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Portfolio
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              My Work
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore my featured projects, other work, and technical articles.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-5xl mt-12">
          <Tabs
            defaultValue="featured"
            className="w-full"
            onValueChange={setActiveTab}
          >
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="featured">Featured Work</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="articles">Articles</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="featured" className="space-y-4">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {featuredProjects.map((project, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      {project.githubUrl && (
                        <Button variant="outline" size="sm" asChild>
                          <Link href={project.githubUrl}>
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </Link>
                        </Button>
                      )}
                      <Button size="sm" asChild>
                        <Link href={project.liveUrl}>
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="projects" className="space-y-4">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {otherProjects.map((project, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm" asChild>
                        <Link href={project.githubUrl}>
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Link>
                      </Button>
                      <Button size="sm" asChild>
                        <Link href={project.liveUrl}>
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="articles" className="space-y-6">
              {articles.map((article, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{article.title}</CardTitle>
                    <CardDescription>{article.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="mr-2 h-4 w-4" />
                      {article.date}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild>
                      <Link href={article.url}>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Read Article
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
