import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer(){
  return(
    <div className="footer">
      <FontAwesomeIcon icon={faFacebookF} />
      <FontAwesomeIcon icon={faInstagram} />
      <FontAwesomeIcon icon={faTwitter} />
      <FontAwesomeIcon icon={faGithub} />
    </div>
  )
}