import { useMemo } from "react";
import InfiniteSpiral from "./InfiniteSpiral";

const technologies = [
  { id: "react", src: "https://cdn.simpleicons.org/react/61DAFB", alt: "React logo", label: "React" },
  { id: "next", src: "https://cdn.simpleicons.org/nextdotjs/FFFFFF", alt: "Next.js logo", label: "Next.js" },
  { id: "node", src: "https://cdn.simpleicons.org/nodedotjs/5FA04E", alt: "Node.js logo", label: "Node.js" },
  { id: "express", src: "https://cdn.simpleicons.org/express/FFFFFF", alt: "Express logo", label: "Express" },
  { id: "mongodb", src: "https://cdn.simpleicons.org/mongodb/47A248", alt: "MongoDB logo", label: "MongoDB" },
  { id: "javascript", src: "https://cdn.simpleicons.org/javascript/F7DF1E", alt: "JavaScript logo", label: "JavaScript" },
  { id: "typescript", src: "https://cdn.simpleicons.org/typescript/3178C6", alt: "TypeScript logo", label: "TypeScript" },
  { id: "mysql", src: "https://cdn.simpleicons.org/mysql/4479A1", alt: "MySQL logo", label: "MySQL" },
  { id: "html", src: "https://cdn.simpleicons.org/html5/E34F26", alt: "HTML5 logo", label: "HTML5" },
  { id: "css", src: "https://cdn.simpleicons.org/css3/1572B6", alt: "CSS3 logo", label: "CSS3" },
  { id: "tailwind", src: "https://cdn.simpleicons.org/tailwindcss/06B6D4", alt: "Tailwind CSS logo", label: "Tailwind" },
  { id: "python", src: "https://cdn.simpleicons.org/python/3776AB", alt: "Python logo", label: "Python" },
  { id: "cpp", src: "https://cdn.simpleicons.org/cplusplus/00599C", alt: "C++ logo", label: "C++" },
  { id: "firebase", src: "https://cdn.simpleicons.org/firebase/FFCA28", alt: "Firebase logo", label: "Firebase" },
  { id: "git", src: "https://cdn.simpleicons.org/git/F05032", alt: "Git logo", label: "Git" },
  { id: "unity", src: "https://cdn.simpleicons.org/unity/FFFFFF", alt: "Unity logo", label: "Unity" },
];

const TechStack = () => {
  const items = useMemo(() => technologies, []);

  return (
    <section className="techstack" id="techstack" aria-label="Technology stack">
      <h2>My Techstack</h2>
      <div className="techstack-spiral">
        <InfiniteSpiral
          items={items}
          animationMode="all"
          direction="up"
          speed={0.32}
          radius={248}
          cardWidth={126}
          cardHeight={126}
          verticalSpacing={68}
          perspective={1050}
          cardRadius={20}
          centerScale={1.17}
          edgeBlur={3}
          edgeFade={0.16}
          cardsPerTurn={8}
          pauseOnHover
        />
      </div>
      <p className="techstack-caption">TOOLS I USE TO TURN IDEAS INTO PRODUCTS</p>
    </section>
  );
};

export default TechStack;
