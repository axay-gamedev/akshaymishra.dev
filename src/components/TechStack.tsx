import { useMemo } from "react";
import InfiniteSpiral from "./InfiniteSpiral";

const TechStack = () => {
  const technologies = useMemo(
    () => [
      { id: "react", src: "/images/react2.webp", alt: "React logo", label: "React" },
      { id: "next", src: "/images/next2.webp", alt: "Next.js logo", label: "Next.js" },
      { id: "node", src: "/images/node2.webp", alt: "Node.js logo", label: "Node.js" },
      { id: "express", src: "/images/express.webp", alt: "Express logo", label: "Express" },
      { id: "mongodb", src: "/images/mongo.webp", alt: "MongoDB logo", label: "MongoDB" },
      { id: "javascript", src: "/images/javascript.webp", alt: "JavaScript logo", label: "JavaScript" },
      { id: "typescript", src: "/images/typescript.webp", alt: "TypeScript logo", label: "TypeScript" },
      { id: "mysql", src: "/images/mysql.webp", alt: "MySQL logo", label: "MySQL" },
      { id: "html", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML5 logo", label: "HTML5" },
      { id: "css", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS3 logo", label: "CSS3" },
    ],
    [],
  );

  return (
    <section className="techstack" id="techstack" aria-label="Technology stack">
      <h2>My Techstack</h2>
      <div className="techstack-spiral">
        <InfiniteSpiral
          items={technologies}
          animationMode="all"
          direction="up"
          speed={0.34}
          radius={250}
          cardWidth={124}
          cardHeight={124}
          verticalSpacing={70}
          perspective={1050}
          cardRadius={18}
          centerScale={1.16}
          edgeBlur={3}
          edgeFade={0.18}
          cardsPerTurn={8}
          pauseOnHover
        />
      </div>
      <p className="techstack-caption">TOOLS I USE TO TURN IDEAS INTO PRODUCTS</p>
    </section>
  );
};

export default TechStack;
