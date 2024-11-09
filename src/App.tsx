import React from 'react'
import { Badge } from '@mantine/core'
import { FaBluesky, FaDev, FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa6'

const Header = () => (
  <header className="header">
    <div className="tit">
      <h1 className="header-title">&nbsp;</h1>
    </div>

    <div className="header-subtitle">
      <Badge color="#704214" style={{ marginRight: "0.5em" }}>c#</Badge>
      <Badge color="#704214" style={{ marginRight: "0.5em" }}>python</Badge>
      <Badge color="#704214" style={{ marginRight: "0.5em" }}>java</Badge>
      <Badge color="#704214" style={{ marginRight: "0.5em" }}>g-cloud</Badge>
    </div>
    <div className="header-subtitle">
      <Badge color="#704214" style={{ marginRight: "0.5em" }}>js</Badge>
      <Badge color="#704214" style={{ marginRight: "0.5em" }}>html</Badge>
      <Badge color="#704214" style={{ marginRight: "0.5em" }}>react</Badge>
      <Badge color="#704214" style={{ marginRight: "0.5em" }}>vite</Badge>
      <Badge color="#704214" style={{ marginRight: "0.5em" }}>angular</Badge>
      <Badge color="#704214" style={{ marginRight: "0.5em" }}>webkit</Badge>
    </div>
  </header>
)

const Headliner = () => (
  <div className="headliner">
    <h2 className="headliner-title">High Seas</h2>
    <p className="headliner-content">
      Teen coder community Hackclub has launched their new big YSWS, High Seas, where you can
      turn hours coded into real-world rewards. Go sign up if you're a teen, or if you aren't consider donating! (Also,
      I'm uploading this page to High Seas, so hi if you're coming from there!)
    </p>
    <a href="https://highseas.hackclub.com" target="_blank" className="read-more">Learn More</a>
  </div>
)

const Article = ({ title, content }) => (
  <article className="article">
    <h3 className="article-title">{title}</h3>
    <div className="article-content">{content}</div>
  </article>
)

const Timeline = () => (
  <div className="timeline">
    <h3 className="timeline-title">Relevant Things Timeline</h3>
    <ul className="timeline-list">
      <li className="timeline-item">
        <div className="timeline-dot"></div>
        <h4 className="timeline-item-title">2023-2025: Computer Science A-Level</h4>
        <p className="timeline-item-content">I'm currently studying Computer Science at A-Level, and I'm loving it! Hoping to go to Falmouth University to study Computer Science (or something computing related) in 2025.</p>
      </li>
      <li className="timeline-item">
        <h4 className="timeline-item-title">2023: Joined Hackclub</h4>
        <p className="timeline-item-content">I joined Hackclub, a teen coder community, and made things like websites, macropads, 3d models, and more!</p>
      </li>
      <li className="timeline-item">
        <h4 className="timeline-item-title">2024: I made this website</h4>
        <p className="timeline-item-content">I made this website to showcase my skills and projects. I hope you like it!</p>
      </li>
    </ul>
    <p>
      Not much to see for now, because, you know, age. But I'm working on it!
    </p>
  </div>
)

const AdSection = ({ title, content }) => (
  <div className="ad-section">
    <h3 className="ad-title">{title}</h3>
    <div className="ad-content">{content}</div>
  </div>
)

const ContactSection = () => (
  <div className="contact-section">
    <h2 className="contact-title">Contact Me</h2>
    <p className="contact-subtitle">For whatever reason, you can contact me here:</p>
    <div className="contact-grid">
      <div className="contact-item">
        <p className="contact-item-title">Email</p>
        <p className="contact-item-content">ben@benjs.uk</p>
      </div>
      <div className="contact-item">
        <p className="contact-item-title">Phone</p>
        <p className="contact-item-content">+44 7495 338673</p>
      </div>
      <div className="contact-item">
        <p className="contact-item-title">Bluesky</p>
        <p className="contact-item-content"><a href="https://bsky.app/profile/benjs.uk" target="_blank">@benjs.uk</a></p>
      </div>
      <div className="contact-item">
        <p className="contact-item-title">GitHub</p>
        <p className="contact-item-content"><a href="https://github.com/barxilly" target="_blank">@Barxilly</a></p>
      </div>
    </div>
    <p className="contact-footer">My other socials are in the footer, if you're interested.</p>
  </div>
)

const Footer = () => (
  <footer className="footer">
    <div className="footer-socials">
      <a href="https://bsky.app/profile/benjs.uk" target="_blank" className="footer-social">
        <FaBluesky size={24} />
      </a>
      <a href="https://github.com/barxilly" target="_blank" className="footer-social">
        <FaGithub size={24} />
      </a>
      <a href='https://dev.to/bendotjs' target="_blank" className="footer-social">
        <FaDev size={24} />
      </a>
      <a href='https://wa.me/447495338673' target="_blank" className="footer-social">
        <FaWhatsapp size={24} />
      </a>
      <a href='https://www.linkedin.com/in/benjsuk/' target="_blank" className="footer-social">
        <FaLinkedin size={24} />
      </a>
      <a href='mailto:ben@benjs.uk' target="_blank" className="footer-social">
        <FaEnvelope size={24} />
      </a>
    </div>
    <p>&copy; {new Date().getFullYear()}-{(new Date().getFullYear()) + 1} Ben Smith. All rights reserved.</p>
  </footer>
)

export default function App() {

  return (
    <div className="container">
      <Header />
      <Headliner />
      <main className="main-content">
        <div className="column">
          <Article
            title="About Me"
            content="I'm Ben, I'm a 17-year-old computer science student from England. Despite my rural upbringing, I've always been fascinated by technology and the internet. I'm passionate about coding and trying to help make a difference. I'm currently studying Computer Science at A-Level and I'm looking forward to studying onwards at university."
          />
          <Article
            title="My Skills"
            content="My biggest skills are with frontend web development (HTML, CSS, JS, React, Vite, etc.), but I also have skills in Python, Java, C# (especially with .NET and WinUI), and Google Cloud.
              I'm also a proficient user of Adobe's Creative Cloud, with experience in Photoshop, InDesign, XD, and Premiere Pro. I also have experience with KiCad and Unity."
          />
        </div>
        <div className="column">
          <Timeline />
        </div>
      </main>
      <AdSection
        title="Featured Projects"
        content={
          <div>
            <div className="project-item">
              <p className="project-title">Coming Soon...</p>
              {/*<p>Revolutionary productivity app</p>
              <p>Over 100,000 active users!</p>*/}
            </div>
          </div>
        }
      />
      <AdSection
        title="My Blog"
        content={
          <div>
            <div className="project-item">
              <p className="project-title">Also Coming Soon...</p>
              <p>Gotta start somewhere, right?</p>
            </div>
          </div>
        }
      />
      <ContactSection />
      <Footer />
    </div>
  )
}