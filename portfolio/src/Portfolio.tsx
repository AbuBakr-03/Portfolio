import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import pfp from "@/assets/pfp.jpg";
import smarthr from "@/assets/SmartHR.png";
import littlelemon from "@/assets/LittleLemon.png";
import tempi from "@/assets/Tempi.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ExternalLink,
  Award,
  Briefcase,
  Code,
  User,
  FileText,
} from "lucide-react";
import { FaMeta } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-blue-500/20 bg-slate-950/90 backdrop-blur-sm">
        <nav className="container mx-auto px-4 py-4">
          <div className="grid grid-cols-2 items-center md:grid-cols-[auto_1fr]">
            <h1 className="text-2xl font-bold text-blue-400">Portfolio</h1>
            <div className="hidden grid-cols-6 gap-6 justify-self-end md:grid">
              <a
                href="#about"
                className="transition-colors hover:text-blue-400"
              >
                About
              </a>
              <a
                href="#skills"
                className="transition-colors hover:text-blue-400"
              >
                Skills
              </a>
              <a
                href="#experience"
                className="transition-colors hover:text-blue-400"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="transition-colors hover:text-blue-400"
              >
                Projects
              </a>
              <a
                href="#certifications"
                className="transition-colors hover:text-blue-400"
              >
                Certifications
              </a>
              <a
                href="#contact"
                className="transition-colors hover:text-blue-400"
              >
                Contact
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="about" className="px-4 pt-24 pb-16">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8 grid place-items-center text-center">
            <img
              src={pfp}
              alt="Profile"
              width={200}
              height={200}
              className="mb-6 rounded-full border-4 border-blue-500"
            />
            <h1 className="mb-4 text-5xl font-bold">
              <span className="text-slate-100">Abu Bakr</span>{" "}
              <span className="text-blue-400">Siddique</span>
            </h1>
            <p className="mb-6 text-xl text-cyan-400">Software Engineer</p>
          </div>

          {/* Professional Summary */}
          <div className="rounded-lg border border-slate-700 bg-slate-900/80 p-8">
            <div className="mb-4 grid place-items-center">
              <div className="grid grid-cols-[auto_1fr] items-center gap-2">
                <User className="h-6 w-6 text-blue-500" />
                <h2 className="text-2xl font-semibold text-blue-400">
                  Professional Summary
                </h2>
              </div>
            </div>
            <p className="mx-auto max-w-3xl leading-relaxed text-slate-300">
              Software Engineer Professional with experience in full-stack
              development. Skilled in modern front-end and back-end
              technologies, with strong focus on integrating AI APIs. Passionate
              about designing and building innovative software solutions and
              growing expertise to drive impactful results.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-slate-900/50 px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 grid place-items-center text-center">
            <Code className="mb-4 h-8 w-8 text-blue-500" />
            <h2 className="mb-4 text-3xl font-bold text-blue-400">
              Skills & Technologies
            </h2>
            <p className="text-slate-400">Technologies and tools I work with</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="border-slate-700 bg-slate-900/80">
              <CardHeader>
                <CardTitle className="text-blue-400">Frontend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  <Badge
                    variant="outline"
                    className="justify-self-start border-blue-500/50 text-cyan-300"
                  >
                    React
                  </Badge>
                  <Badge
                    variant="outline"
                    className="justify-self-start border-blue-500/50 text-cyan-300"
                  >
                    HTML
                  </Badge>
                  <Badge
                    variant="outline"
                    className="justify-self-start border-blue-500/50 text-cyan-300"
                  >
                    TypeScript/JavaScript
                  </Badge>
                  <Badge
                    variant="outline"
                    className="justify-self-start border-blue-500/50 text-cyan-300"
                  >
                    CSS/TailwindCSS
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-700 bg-slate-900/80">
              <CardHeader>
                <CardTitle className="text-blue-400">Backend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  <Badge
                    variant="outline"
                    className="justify-self-start border-blue-500/50 text-cyan-300"
                  >
                    Python
                  </Badge>
                  <Badge
                    variant="outline"
                    className="justify-self-start border-blue-500/50 text-cyan-300"
                  >
                    Django
                  </Badge>
                  <Badge
                    variant="outline"
                    className="justify-self-start border-blue-500/50 text-cyan-300"
                  >
                    PostgreSQL
                  </Badge>
                  <Badge
                    variant="outline"
                    className="justify-self-start border-blue-500/50 text-cyan-300"
                  >
                    MySQL
                  </Badge>
                  <Badge
                    variant="outline"
                    className="justify-self-start border-blue-500/50 text-cyan-300"
                  >
                    Gemini AI API
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-700 bg-slate-900/80">
              <CardHeader>
                <CardTitle className="text-blue-400">Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  <Badge
                    variant="outline"
                    className="justify-self-start border-blue-500/50 text-cyan-300"
                  >
                    Gemini AI API
                  </Badge>
                  <Badge
                    variant="outline"
                    className="justify-self-start border-blue-500/50 text-cyan-300"
                  >
                    Git & GitHub
                  </Badge>
                  <Badge
                    variant="outline"
                    className="justify-self-start border-blue-500/50 text-cyan-300"
                  >
                    Figma
                  </Badge>
                  <Badge
                    variant="outline"
                    className="justify-self-start border-blue-500/50 text-cyan-300"
                  >
                    Jest
                  </Badge>
                  <Badge
                    variant="outline"
                    className="justify-self-start border-blue-500/50 text-cyan-300"
                  >
                    CloudFlare
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section id="experience" className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-12 grid place-items-center text-center">
            <Briefcase className="mb-4 h-8 w-8 text-blue-500" />
            <h2 className="mb-4 text-3xl font-bold text-blue-400">
              Work Experience
            </h2>
            <p className="text-slate-400">My professional journey</p>
          </div>

          <div className="grid gap-8">
            <Card className="border-slate-700 bg-slate-900/80">
              <CardHeader>
                <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-[1fr_auto]">
                  <div className="grid gap-1">
                    <CardTitle className="text-blue-400">
                      Web Developer Intern
                    </CardTitle>
                    <CardDescription className="text-slate-300">
                      Protech I.T. Zone | Rawalpindi, Pakistan
                    </CardDescription>
                  </div>
                  <Badge
                    variant="outline"
                    className="justify-self-start border-blue-500/50 text-cyan-300 md:justify-self-end"
                  >
                    Feb 2024 - Jul 2024
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  <p className="text-slate-300">
                    • Protech IT Zone is a web development and software
                    development company.
                  </p>
                  <p className="text-slate-300">
                    • Assisted in developing web-based applications using
                    ASP.NET MVC framework to enhance client solutions.
                  </p>
                  <p className="text-slate-300">
                    • Designed and implemented database schemas using MSSMS to
                    support application data storage needs.
                  </p>
                  <p className="text-slate-300">
                    • Gained hands-on experience working with C# within the
                    ASP.NET MVC environment to build functional features.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-700 bg-slate-900/80">
              <CardHeader>
                <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-[1fr_auto]">
                  <div className="grid gap-1">
                    <CardTitle className="text-blue-400">
                      Technology Intern | Manama, Bahrain
                    </CardTitle>
                    <CardDescription className="text-slate-300">
                      Aion Digital
                    </CardDescription>
                  </div>
                  <Badge
                    variant="outline"
                    className="justify-self-start border-blue-500/50 text-cyan-300 md:justify-self-end"
                  >
                    Aug 2023 - Sep 2023
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  <p className="text-slate-300">
                    • Aion is a market leading FinTech that provides digital
                    banking solutions.
                  </p>
                  <p className="text-slate-300">
                    • Gained understanding of Aion's mission, values, and the
                    broader FinTech industry to support aligned operational
                    activities.
                  </p>
                  <p className="text-slate-300">
                    • Emphasized the importance of efficient client
                    documentation and data management.{" "}
                  </p>
                  <p className="text-slate-300">
                    • Hands-on experience with archiving systems and
                    record-keeping best practices in SharePoint.
                  </p>
                  <Link
                    to={
                      "https://drive.google.com/file/d/1y08aqKaE96I7Nmhg7ZlcanB5WKWmVr9l/view?usp=sharing"
                    }
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-blue-500/50 bg-transparent text-cyan-300 hover:bg-blue-600"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Certification
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-700 bg-slate-900/80">
              <CardHeader>
                <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-[1fr_auto]">
                  <div className="grid gap-1">
                    <CardTitle className="text-blue-400">
                      Web Developer Intern
                    </CardTitle>
                    <CardDescription className="text-slate-300">
                      Knowledge Pearls | Islamabad, Pakistan
                    </CardDescription>
                  </div>
                  <Badge
                    variant="outline"
                    className="justify-self-start border-blue-500/50 text-cyan-300 md:justify-self-end"
                  >
                    Jul 2024 - Sep 2024
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  <p className="text-slate-300">
                    • Contributed to the development and launch of Electric Eye
                    Technologies, a project focused on enhancing motorcycle
                    experience and management.
                  </p>
                  <p className="text-slate-300">
                    • Designed and built a responsive landing page from scratch
                    using React, TypeScript, and TailwindCSS, ensuring alignment
                    with the brand's vision.
                  </p>
                  <p className="text-slate-300">
                    • Gained practical experience with front-end technologies
                    including React, TypeScript, and TailwindCSS, supporting the
                    project's technical development.{" "}
                  </p>
                  <Link
                    to={
                      "https://drive.google.com/file/d/1Xniq5Kl0hipBZP93wCqOhDToDi2bYeS6/view?usp=sharing"
                    }
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-blue-500/50 bg-transparent text-cyan-300 hover:bg-blue-600"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Certification
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-slate-900/50 px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 grid place-items-center text-center">
            <FileText className="mb-4 h-8 w-8 text-blue-500" />
            <h2 className="mb-4 text-3xl font-bold text-blue-400">
              Featured Projects
            </h2>
            <p className="text-slate-400">Some of my recent work</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="group border-slate-700 bg-slate-900/80 transition-colors hover:border-blue-500/50">
              <CardHeader>
                <img
                  src={smarthr}
                  alt="Smart HR"
                  width={400}
                  height={200}
                  className="mb-4 aspect-video rounded-lg"
                />
                <CardTitle className="text-blue-400">SmartHR</CardTitle>
                <CardDescription className="text-slate-300">
                  AI-powered recruitment platform that automates resume
                  screening, confidence analysis, and interview question
                  generation. With up to 97% accuracy in emotion detection, it
                  enables data-driven hiring decisions and reduces bias.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 grid grid-cols-3 gap-2">
                  <Badge
                    variant="outline"
                    className="justify-self-start border-blue-500/50 text-cyan-300"
                  >
                    React
                  </Badge>
                  <Badge
                    variant="outline"
                    className="justify-self-start border-blue-500/50 text-cyan-300"
                  >
                    Django
                  </Badge>
                  <Badge
                    variant="outline"
                    className="justify-self-start border-blue-500/50 text-cyan-300"
                  >
                    PostgreSQL
                  </Badge>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Link to={"https://github.com/AbuBakr-03/Frontend"}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-blue-500/50 bg-transparent text-cyan-300 hover:bg-blue-600"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Front-End Code
                    </Button>
                  </Link>
                  <Link to={"https://github.com/AbuBakr-03/Backend"}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-blue-500/50 bg-transparent text-cyan-300 hover:bg-blue-600"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Back-End Code
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="group border-slate-700 bg-slate-900/80 transition-colors hover:border-blue-500/50">
              <CardHeader>
                <img
                  src={littlelemon}
                  alt="Little Lemon"
                  width={400}
                  height={200}
                  className="mb-4 aspect-video rounded-lg"
                />
                <CardTitle className="text-blue-400">Little Lemon</CardTitle>
                <CardDescription className="text-slate-300">
                  Developed a full-stack restaurant web application for Meta's
                  Capstone Project, featuring a responsive UI for menu browsing,
                  reservations, and orders, along with RESTful APIs, user
                  authentication, a booking system and ordering system.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 grid grid-cols-3 gap-2">
                  <Badge
                    variant="outline"
                    className="justify-self-start border-blue-500/50 text-cyan-300"
                  >
                    React
                  </Badge>
                  <Badge
                    variant="outline"
                    className="justify-self-start border-blue-500/50 text-cyan-300"
                  >
                    Django
                  </Badge>
                  <Badge
                    variant="outline"
                    className="justify-self-start border-blue-500/50 text-cyan-300"
                  >
                    MySQL
                  </Badge>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Link
                    to={
                      "https://github.com/AbuBakr-03/LittleLemon-2.0-Front-End"
                    }
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-blue-500/50 bg-transparent text-cyan-300 hover:bg-blue-600"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Front-End Code
                    </Button>
                  </Link>

                  <Link
                    to={
                      "https://github.com/AbuBakr-03/LittleLemon-2.0-Back-End"
                    }
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-blue-500/50 bg-transparent text-cyan-300 hover:bg-blue-600"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Back-End Code
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="group border-slate-700 bg-slate-900/80 transition-colors hover:border-blue-500/50">
              <CardHeader>
                <img
                  src={tempi}
                  alt="Tempi"
                  width={400}
                  height={200}
                  className="mb-4 aspect-video rounded-lg"
                />
                <CardTitle className="text-blue-400">Tempi</CardTitle>
                <CardDescription className="text-slate-300">
                  A gig-matching platform connecting employers with university
                  students seeking flexible, short-term work. Employers can post
                  and manage applications and gigs, while students can create
                  profiles, browse gigs, save and apply with ease.{" "}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 grid grid-cols-3 gap-2">
                  <Badge
                    variant="outline"
                    className="justify-self-start border-blue-500/50 text-cyan-300"
                  >
                    Django
                  </Badge>
                  <Badge
                    variant="outline"
                    className="justify-self-start border-blue-500/50 text-cyan-300"
                  >
                    PostgreSQL
                  </Badge>
                  <Badge
                    variant="outline"
                    className="justify-self-start border-blue-500/50 text-cyan-300"
                  >
                    CloudFlare R2
                  </Badge>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Link to={"https://github.com/AbuBakr-03/Tempi-Backend"}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-blue-500/50 bg-transparent text-cyan-300 hover:bg-blue-600"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Back-End Code
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-12 grid place-items-center text-center">
            <Award className="mb-4 h-8 w-8 text-blue-500" />
            <h2 className="mb-4 text-3xl font-bold text-blue-400">
              Certifications
            </h2>
            <p className="text-slate-400">
              Professional achievements and credentials
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Card className="border-slate-700 bg-slate-900/80">
              <CardHeader className="grid place-items-center text-center">
                <div className="mb-4 grid h-16 w-16 place-items-center rounded-full bg-blue-500/20">
                  <FaMeta className="h-8 w-8 text-blue-500" />
                </div>
                <CardTitle className="text-blue-400">
                  Meta Front-End Developer Professional Certificate
                </CardTitle>
                <CardDescription className="text-slate-300">
                  Coursera
                </CardDescription>
              </CardHeader>
              <CardContent className="grid place-items-center text-center">
                <p className="mb-4 text-slate-400">
                  Professional level certification demonstrating expertise in
                  designing distributed systems on AWS
                </p>
                <Link
                  to={
                    "https://www.coursera.org/account/accomplishments/specialization/certificate/2M6TIPQRNUSS"
                  }
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-blue-500/50 bg-transparent text-cyan-300 hover:bg-blue-600"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Verify
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-slate-700 bg-slate-900/80">
              <CardHeader className="grid place-items-center text-center">
                <div className="mb-4 grid h-16 w-16 place-items-center rounded-full bg-blue-500/20">
                  <FaMeta className="h-8 w-8 text-blue-500" />
                </div>
                <CardTitle className="text-blue-400">
                  Meta Back-End Developer Professional Certificate
                </CardTitle>
                <CardDescription className="text-slate-300">
                  Coursera
                </CardDescription>
              </CardHeader>
              <CardContent className="grid place-items-center text-center">
                <p className="mb-4 text-slate-400">
                  Certified in designing, building, and deploying applications
                  on Google Cloud Platform
                </p>
                <Link
                  to={
                    "https://www.coursera.org/account/accomplishments/specialization/certificate/EPO38ROFN1IE"
                  }
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-blue-500/50 bg-transparent text-cyan-300 hover:bg-blue-600"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Verify
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-slate-900/50 px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-12 grid place-items-center text-center">
            <Mail className="mb-4 h-8 w-8 text-blue-500" />
            <h2 className="mb-4 text-3xl font-bold text-blue-400">
              Get In Touch
            </h2>
            <p className="text-slate-400">
              Let's connect and discuss opportunities
            </p>
          </div>

          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="grid place-items-center">
              <Mail className="mb-2 h-8 w-8 text-blue-500" />
              <h3 className="mb-2 font-semibold text-blue-400">Email</h3>
              <p className="text-slate-300">abubakr399977@gmail.com</p>
            </div>
            <div className="grid place-items-center">
              <Phone className="mb-2 h-8 w-8 text-blue-500" />
              <h3 className="mb-2 font-semibold text-blue-400">Phone</h3>
              <p className="text-slate-300">+92 303-2882444</p>
            </div>
            <div className="grid place-items-center">
              <MapPin className="mb-2 h-8 w-8 text-blue-500" />
              <h3 className="mb-2 font-semibold text-blue-400">Location</h3>
              <p className="text-slate-300">Islamabad, Pakistan</p>
            </div>
          </div>

          <div className="mx-auto grid max-w-xs grid-cols-3 place-items-center gap-6">
            <Link
              to="https://github.com/AbuBakr-03"
              className="text-slate-400 transition-colors hover:text-blue-400"
            >
              <Github className="h-8 w-8" />
            </Link>
            <Link
              to="https://www.linkedin.com/in/abubakr-siddique-pk/"
              className="text-slate-400 transition-colors hover:text-blue-400"
            >
              <Linkedin className="h-8 w-8" />
            </Link>
            <Link
              to="mailto:abubakr399977@gmail.com"
              className="text-slate-400 transition-colors hover:text-blue-400"
            >
              <Mail className="h-8 w-8" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 px-4 py-8">
        <div className="container mx-auto grid place-items-center">
          <p className="text-slate-400">
            © {new Date().getFullYear()} Abu Bakr Siddique. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
