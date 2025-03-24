import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 backdrop-blur-md bg-background/80 border-b">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold text-xl">Portfolio</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#home" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            
            <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <div className="md:hidden">
            <button className="flex h-10 w-10 items-center justify-center rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
              <span className="sr-only">Toggle menu</span>
            </button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section id="home" className="  relative overflow-hidden py-20 md:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-background z-0"></div>
          <div className="container relative z-10">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
              <div className=" space-y-6 text-center md:text-left">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm animate-fade-in">
                  Welcome to my portfolio
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl animate-slide-up">
                  Hi, I'm <span className="text-primary">Ayesha Joyo</span>
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl animate-slide-up-delay">
                  A passionate web developer creating beautiful, functional, and user-centered digital experiences.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-delay">
                  <Link
                    href="#contact"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                  >
                    Contact Me
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  
                </div>
                <div className="flex justify-center md:justify-start gap-4 pt-2 animate-fade-in-delay-long">
                  <Link href="#https://github.com/Ayesha-joyo" className="text-muted-foreground hover:text-primary transition-colors">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link href="#https://www.linkedin.com/in/ayesha-joyo-a6b90a2b9" className=" text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                 
                  <Link href="#umairjoyo58@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Link>
                </div>
              </div>
              <div className=" flex justify-center">
                <div className="relative h-50 w-80 overflow-hidden rounded-full border-4 border-primary/20 animate-float">
                  <Image
                    src="/profile.png"
                    alt="Profile"
                    width={320}
                    height={520}
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-muted/40">
          <div className="container">
            <div className="flex flex-col items-center justify-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
              <div className="mt-2 h-1 w-20 bg-primary rounded"></div>
            </div>
            <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
              <div className="flex justify-center">
                <div className="relative h-[300px] w-[300px] overflow-hidden rounded-lg shadow-lg transform transition-transform hover:scale-105">
                  <Image
                    src="/about-me.png"
                    alt="About Me"
                    width={300}
                    height={400}
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">My Journey</h3>
                <p className="text-muted-foreground">
                  I'm a passionate web developer with a strong foundation in modern technologies. My journey in web
                  development began with a  GIAIC IT Course At Governor House Karachi , which quickly evolved into a deep passion
                  for creating digital experiences.
                </p>
                <p className="text-muted-foreground">
                  I specialize in building responsive, user-friendly websites and applications using the latest
                  technologies like React, Next.js, and Tailwind CSS. I'm constantly learning and exploring new
                  technologies to stay at the forefront of web development.
                </p>
                <div className="pt-4">
                  <h4 className="text-xl font-semibold mb-2">Personal Interests</h4>
                  <div className="flex flex-wrap gap-2">
                    
                    
                    
                    <span className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                      Reading
                    </span>
                    <span className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                      Exploring New Things
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

          

        <section id="skills" className="py-20 bg-muted/50">
          <div className="container">
            <div className="flex flex-col items-center justify-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Skills</h2>
              <div className="mt-2 h-1 w-70 bg-primary rounded"></div>
              <p className="mt-6 max-w-[700px] text-muted-foreground">
                I've developed a diverse set of skills throughout my journey as a web developer.
              </p>
            </div>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Frontend Development", items: ["HTML", "CSS", "JavaScript", "React", "Next.js"] },
              
                { title: "Tools & Others", items: ["Git", "GitHub", "VS Code", "Figma", "Responsive Design"] },
              ].map((category, index) => (
                <div
                  key={index}
                  className="rounded-lg border bg-background p-6 shadow-md transition-transform hover:-translate-y-1"
                >
                  <h3 className="text-xl font-bold">{category.title}</h3>
                  <div className="mt-4 space-y-2">
                    {category.items.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="container">
            <div className="flex flex-col items-center justify-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
              <div className="mt-2 h-1 w-20 bg-primary rounded"></div>
              <p className="mt-4 max-w-[600px] text-muted-foreground">
                Feel free to reach out if you have any questions or want to work together.
              </p>
            </div>
            <div className="mx-auto max-w-[600px]">
              <form className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Subject"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="#https://github.com/Ayesha-joyo" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="#https://www.linkedin.com/in/ayesha-joyo-a6b90a2b9" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
  
            <Link href="#umairjoyo58@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

