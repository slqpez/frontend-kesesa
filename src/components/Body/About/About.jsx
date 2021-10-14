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
      <p className="about__container-p">
        Este aplicación fue realizada con fines académicos para el proyecto
        integrador 1 de la carrera de ingeniería de sistemas en la universidad
        de Antioquia. Se desarrolló en un lapso de 6 meses, por; Santiago López
        Quiceno, Sebastián Gallego Pulgarín y Kevin Alonso Restrepo García.
        <br />
        <br />
        Para su desarrollo se utilizaron tecnologías y herramientas como; React,
        Node.Js, Mongo DB, Git, entre otras.
        <br />
        <br />
        Agradecemos al profesor Carlos Mauricio Duque por el
        acompañamiento durante todo el proceso del proyecto. 
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
