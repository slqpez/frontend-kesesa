import React from "react";
import "./about.css";
import lopez from "images/team/lopez.jpg";
import kevin from "images/team/kevin.jpg";
import sebas from "images/team/sebas.jpg";
import github from "images/github.png";

function About() {
  return (
    <div className="about__container">
      <div className="about__container-title">
        <h2>About</h2>
      </div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque magni
        praesentium, et dolorum dolores, vitae quas asperiores maiores provident
        illo consectetur iusto cumque eveniet eaque blanditiis! Laborum unde
        esse rerum? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Sit officiis incidunt illum alias numquam animi dicta nobis laboriosam
        accusamus quas, fugit minima ad expedita tenetur vero. Quos nisi tenetur
        ratione. Fugit neque deserunt magnam, dolorum esse itaque minima aliquam
        laudantium. Similique fuga ea dolorem eaque dolorum dolores, commodi
        possimus officia qui, ipsam ab. Quisquam molestiae obcaecati, quas
        itaque officiis necessitatibus. Laborum facilis sed repudiandae velit
        earum et. Similique placeat impedit error deleniti odio tempore sint
        quod magni, quam consequatur? Magni sequi sapiente deleniti, iure unde
        quas temporibus fugiat sint dolores. Vel perferendis reiciendis ratione.
        Atque accusantium, non quibusdam blanditiis natus cumque ratione
        cupiditate voluptas numquam labore magnam alias sit provident, ad, sint
        ab? Ex, ducimus! Quisquam autem ipsum placeat ea! Ad voluptate harum
      </p>
      <div className="about__container-team">
        <div className="about__container-title">
          <h2>Nosotros</h2>
        </div>
        <div className="team__flex-container">
          <div className="about__card-team">
            <div className="about__card-team-img-container">
              <img src={lopez} alt="" />
            </div>
            <div className="about__card-team-detail">
              <p>Santiago López</p>
              <a href="https://github.com/slqpez" target="_blank">
                <img src={github} alt="" />
              </a>
            </div>
          </div>
          <div className="about__card-team">
            <div className="about__card-team-img-container">
              <img src={kevin} alt="" />
            </div>
            <div className="about__card-team-detail">
              <p>Kevin Restrepo</p> 
              <a href="https://github.com/kevinrg27" target="_blank">
                <img src={github} alt="" />
              </a>
            </div>
          </div>
          <div className="about__card-team">
            <div className="about__card-team-img-container">
              <img src={sebas} alt="" />
            </div>
            <div className="about__card-team-detail">
              <p>Sebastian Gallego</p>
              <a href="https://github.com/sebasgp" target="_blank">
                <img src={github} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
