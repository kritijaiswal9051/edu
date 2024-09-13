import "./Title.css";

function Title({ subTitle, title }) {
  return (
    <div className="title" key={"2"}>
      <p>{subTitle}</p>
      <h2>{title}</h2>
    </div>
  );
}

export default Title;
