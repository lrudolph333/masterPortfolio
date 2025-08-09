import React from "react";
import styled from "styled-components";
import { socialMediaLinks } from "../../portfolio";
import "./SocialMedia.css";

const IconWrapper = styled.span`
  i {
    background-color: ${(props) => props.backgroundColor};
  }
  &:hover i {
    background-color: ${({ theme }) => theme.text};
    transition: 0.3s ease-in;
  }
`;

export default function socialMedia(props) {
  return (
    <div className="social-media-div">
      {socialMediaLinks.map((media, i) => {
        return (
          <a
            key={i}
            href={media.link}
            className={`icon-button`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconWrapper {...media} {...props}>
              <i
                className={`${media.fontAwesomeClass || "fab"} ${
                  media.fontAwesomeIcon
                }`}
              ></i>
            </IconWrapper>
            {/* <span></span> */}
          </a>
        );
      })}
    </div>
  );
}
