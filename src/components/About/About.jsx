import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

function About({ setPlay }) {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlay(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow Leaders Today</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque tenetur
          explicabo et placeat quasi molestias magni incidunt maxime
          exercitationem fuga? Animi tenetur,.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, error.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
          voluptas expedita temporibus suscipit, exercitationem corporis!
        </p>
      </div>
    </div>
  );
}

export default About;
