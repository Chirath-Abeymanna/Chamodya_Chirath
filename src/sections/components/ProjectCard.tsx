import "../css/projectCard.css";

const languageColors: { [key: string]: string } = {
  python: "dot-python",
  javascript: "dot-javascript",
  HTML: "dot-html",
  CSS: "dot-css",
  java: "dot-java",
};

const ProjectCard = ({
  title,
  languages,
  description,
  link,
  Image,
}: {
  title: string;
  languages: string;
  description: string;
  link: string;
  Image: string;
}) => {
  const languageArray = languages.split(","); // Convert languages string to an array
  console.log(languageArray);

  return (
    <div className="card relative pb-10  bg-card w-[30vw] h-auto rounded-md text-white">
      <img src={Image} alt={title} className="image" />

      <h1 className="text-3xl font-semibold mt-5 ml-3">{title}</h1>

      <h2 className="relative ml-3 flex text-gray-500 h-3">
        Languages used -
        <div className="relative ml-2 h-auto">
          {languageArray.map((language, index) => (
            <div className="language" key={index}>
              {/* Dot with dynamic color based on the language */}
              <div
                className={`dot ${languageColors[language] || "dot-default"}`}
              ></div>
              <div className="">{language.trim()}</div>
            </div>
          ))}
        </div>
      </h2>
      <p className="relative top-5 ml-3 text-justify leading-1 text-[clamp(8px,3vw,50px)]">
        {description}
      </p>
      <a href={link} target="_blank" className="view-project">
        <i className="fa fa-arrow-right-long"></i>
        View project
      </a>
    </div>
  );
};

export default ProjectCard;
