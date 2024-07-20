import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
    {
      skill: "HTML+CSS",
      level: "intermediate",
      color: "#2662EA"
    },
    {
      skill: "JavaScript + REACT",
      level: "intermediate",
      color: "#EFD81D"
    },
    {
      skill: "Web Design",
      level: "intermediate",
      color: "#C3DCAF"
    },
    {
      skill: "Python",
      level: "advanced",
      color: "#E84F33"
    },
    {
      skill: "Java",
      level: "beginner",
      color: "#60DAFB"
    },
    {
      skill: "C++",
      level: "intermediate",
      color: "#FF3B00"
    }
  ];


function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

function Avatar() {
  return (
    <div>
      <img className="avatar" src="ReginaH.jpg" alt="Regina Uyen Ho" />
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Regina Uyen Ho</h1>
      <p>
      A senior student at University of Missouri-Kansas City, majoring in Computer Science with a minor in Mathematics. 
      I have a strong passion for web design and have honed my skills in both front-end and back-end programming.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}
function Skill({skill,color,level}) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
      {level === "beginner" && "🐣"}
      {level === "intermediate" && "✌️"}
      {level === "advanced" && "💪"}
      </span>
    </div>
  );
}
