import React from "react";
import { LiaDiscord } from "react-icons/lia";
import { SiFiverr } from "react-icons/si";
import { CiLinkedin } from "react-icons/ci";
import { BsCodeSlash } from "react-icons/bs";
import { BiLogoWordpress } from "react-icons/bi";
import { AiOutlineDribbble } from "react-icons/ai";

const Footer = ({footer: {footer,footer2}}) => {
  return (
    <div id="footer">
      <div className="footer__container">
        <div className="footer-flex">
          <div className="footer__left">
            <div className="footer__social">
              <a
                href="https://www.fiverr.com/mubashirali446?up_rollout=true"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiFiverr className="fiverr" />
              </a>
              <a
                href="https://www.linkedin.com/in/mubashir-ali-384354248/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CiLinkedin className="fiverr" />
              </a>
              <a
                href="https://discord.com/users/925414335738683413"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LiaDiscord className="fiverr" />
              </a>
              <a
                href="https://dribbble.com/ALI476"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineDribbble className="fiverr" />
              </a>
            </div>
          </div>
          <div className="footer__mid">
            <div className="link-1">
              <a
                href={footer}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BiLogoWordpress className="portfolio port" />
                <h3 className="portfolio">Portfolio</h3>
              </a>
            </div>
            <div className="link-1">
              <a
                href={footer2}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsCodeSlash className="portfolio port" />

                <h3 className="portfolio">Portfolio</h3>
              </a>
            </div>
          </div>

          <div className="footer__right">
            <p className="copyright">
              INFERNO Copyright © 2023 Inferno - All rights reserved || Designed
              By: Mubashir ALI
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Footer;
