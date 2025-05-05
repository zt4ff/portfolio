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
      title: "QShop E-Commerce Web Application",
      description:
        "A full-featured e-commerce platform with product management, discount management, cart functionality, payment processing, automated deliveries, and order tracking.",
      image: "/qshop.png",
      tags: ["Nextjs", "Node", "MongoDB", "Stripe", "Nestjs"],
      liveUrl: "https://app.qshop.tech/",
    },
    {
      title: "McMakler",
      description:
        "An online real estate brokake application for residential and commercial spaces",
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
    {
      title: "Content Management System",
      description:
        "A custom CMS for managing digital content, supporting multiple content types, user roles, and publishing workflows.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["Next.js", "Prisma", "PostgreSQL", "AWS S3", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Supply Chain Management Platform",
      description:
        "A platform for tracking and managing supply chain operations, inventory, and logistics across multiple locations.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["React", "Node.js", "MongoDB", "Docker", "Kubernetes"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "React Component Library",
      description:
        "A collection of reusable React components with TypeScript support and comprehensive documentation.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["React", "TypeScript", "Storybook"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Node.js API Framework",
      description:
        "A lightweight framework for building scalable and maintainable REST APIs with Node.js.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["Node.js", "Express", "TypeScript"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Database Migration Tool",
      description:
        "A CLI tool for managing database migrations across different environments and database systems.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["CLI", "Node.js", "SQL"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  const articles = [
    {
      title: "Building Scalable Microservices with Node.js",
      description:
        "A comprehensive guide to designing and implementing microservices architecture using Node.js and Docker.",
      date: "March 15, 2023",
      readTime: "12 min read",
      tags: ["Microservices", "Node.js", "Docker", "Architecture"],
      url: "#",
    },
    {
      title: "React Performance Optimization Techniques",
      description:
        "Learn how to identify and fix performance bottlenecks in React applications using profiling tools and best practices.",
      date: "January 22, 2023",
      readTime: "8 min read",
      tags: ["React", "Performance", "JavaScript", "Optimization"],
      url: "#",
    },
    {
      title: "The Future of Web Development: What to Expect in 2023",
      description:
        "An analysis of emerging trends and technologies that will shape the future of web development in the coming year.",
      date: "December 10, 2022",
      readTime: "10 min read",
      tags: ["Web Development", "Trends", "Future Tech"],
      url: "#",
    },
    {
      title: "Implementing Authentication with NextAuth.js",
      description:
        "A step-by-step tutorial on implementing secure authentication in Next.js applications using NextAuth.js.",
      date: "October 5, 2022",
      readTime: "15 min read",
      tags: ["Next.js", "Authentication", "Security", "Tutorial"],
      url: "#",
    },
    {
      title: "Database Design Patterns for Modern Applications",
      description:
        "Explore effective database design patterns and strategies for building scalable and maintainable applications.",
      date: "August 18, 2022",
      readTime: "11 min read",
      tags: ["Database", "Design Patterns", "Architecture"],
      url: "#",
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
                      {article.date} • {article.readTime}
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
