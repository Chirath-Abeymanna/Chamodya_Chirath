interface ProjectProps {
  title: string;
  languages: string;
  description: string;
  link: string;
  Image: string;
}

const languageColors: { [key: string]: string } = {
  python: "dot-python",
  javascript: "dot-javascript",
  HTML: "dot-html",
  CSS: "dot-css",
  java: "dot-java",
  "Next js": "dot-nextjs",
  "Spring Boot": "dot-springboot",
  Angular: "dot-angular",
  "Tailwind CSS": "dot-tailwind",
  MySQL: "dot-mysql",
  Flask: "dot-flask",
  MongoDB: "dot-mongodb",
  Typescript: "dot-typescript",
};

const ProjectCard = ({
  title,
  languages,
  description,
  link,
  Image,
}: ProjectProps) => {
  const languageArray = languages.split(",");

  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="card">
            <div className="card-content">
              <img src={Image} alt={title} className="image" />
              <h1 className="card-title">{title}</h1>
            </div>
            <div className="card-stack">
              <h3>Technology stack - </h3>
              <div className="language-container">
                {languageArray.map((language: string, index: number) => (
                  <div className="language-item" key={index}>
                    <div
                      className={`dot ${
                        languageColors[language] || "dot-default"
                      }`}
                    ></div>
                    <span>{language.trim()}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="card-description">
              <p>{description}</p>
            </div>
          </div>
        </div>
        <div className="flip-card-back">
          <div className="card-back">
            <a href={link} target="_blank" className="project-link">
              Go to Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
