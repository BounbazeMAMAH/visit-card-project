import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
export default function Main(){
  return(
    <div className="main">
      <h3>Bounbaze MAMAH</h3>
      <p className="my-job">Ux/Ui Designer, FrontEnd Developer</p>
      <p>Togolais</p>
      <div className="btns">
        <button className="btn"><FontAwesomeIcon icon={faEnvelope} /> E-mail</button>
        <button className="btn right"><FontAwesomeIcon icon={faLinkedinIn} /> Linkedin</button>
      </div>
      <div className="about">
        <h4>About</h4>
        <p>
          Actuellement en formation en développement web, je suis un artiste graphique certifié 
          UX designer avec plus de quatre ans d'expérience. J'ai travaillé avec des clients variés. 
          Passionné par la conception visuelle et le développement web, j'allie créativité et technique. 
        </p>
      </div>
      <div className="about">
        <h4>Interest</h4>
        <p>
        Passionné par l'art et la technologie, je m'intéresse à l'intégration de la conception graphique dans le développement web. J'explore les tendances en UX/UI et les innovations technologiques, tout en pratiquant la photographie et le dessin pour nourrir ma créativité. Je suis également curieux des technologies émergentes et leur impact sur l'expérience utilisateur. 
        </p>
      </div>
    </div>
    
  )
}