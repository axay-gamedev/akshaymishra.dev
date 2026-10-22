import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    name: "Photobooth",
    category: "Real-time collaborative app",
    tools: "React, WebRTC, Socket.IO, Node.js, Express, Canvas API",
    image: "/images/photobooth.png",
    alt: "Photobooth project preview",
    href: "https://photobooth-zenm.onrender.com/",
  },
  {
    name: "SkillForge",
    category: "AI skill-gap & learning roadmap",
    tools: "React, Node.js, Express, Gemini API, Firebase Auth, Firestore",
    image: "/images/skillforge.png",
    alt: "SkillForge project preview",
    href: "https://github.com/axay-gamedev/SkillForge",
  },
  {
    name: "AI WebAssistant",
    category: "Chrome extension · Applied AI",
    tools: "JavaScript, Manifest V3, Gemini API",
    image: "/images/placeholder.webp",
    alt: "AI WebAssistant project preview",
    href: "https://github.com/axay-gamedev",
  },
  {
    name: "Asylum",
    category: "First-person psychological horror game",
    tools: "Unity Engine, C#, Gameplay Scripting, 3D Environments",
    image: "https://img.itch.zone/aW1nLzExMzIxNDE0LnBuZw%3D%3D/original/PvsudF.png",
    alt: "Asylum horror game cover",
    href: "https://axayteehee.itch.io/asylumm",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const workContainer = document.querySelector(".work-container");
      if (!box.length || !workContainer) return;
      const rectLeft = workContainer.getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      const padding = parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: () => `+=${Math.max(translateX, 1)}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", { x: () => -translateX, ease: "none" });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={project.name}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4><a href={project.href} target="_blank" rel="noreferrer">{project.name}</a></h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
                <p><a href={project.href} target="_blank" rel="noreferrer">View project ↗</a></p>
              </div>
              <WorkImage image={project.image} alt={project.alt} link={project.href} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
