import React from "react";
import styled from "styled-components";
import { socialMediaLinks } from "../../portfolio";
import "./SocialMedia.css";

const IconWrapper = styled.span`
  i {
    background-color: ${(props) => props.backgroundColor};
  }
  .iconify {
    background-color: ${(props) => props.backgroundColor};
  }
  img {
    background-color: ${(props) => props.backgroundColor};
  }
  &:hover i,
  &:hover .iconify,
  &:hover img {
    background-color: ${({ theme }) => theme.text};
    transition: 0.3s ease-in;
  }
`;

export default function socialMedia(props) {
  return (
    <div className="social-media-div">
      {socialMediaLinks.map((media, i) => {
        // Support for Iconify icons (like simple-icons:substack)
        if (media.iconifyClassname) {
          return (
            <a
              key={i}
              href={media.link}
              className={`icon-button`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconWrapper {...media} {...props}>
                <span
                  className="iconify"
                  data-icon={media.iconifyClassname}
                  data-width="0.65rem"
                  data-height="0.65rem"
                  style={{
                    color: "white",
                  }}
                  data-inline="false"
                ></span>
              </IconWrapper>
            </a>
          );
        }
        // Support for image icons
        if (media.imageSrc) {
          return (
            <a
              key={i}
              href={media.link}
              className={`icon-button`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconWrapper {...media} {...props}>
                <img
                  src={`${process.env.PUBLIC_URL}/icons/${media.imageSrc}`}
                  alt={media.name}
                  style={{
                    width: "2.6rem",
                    height: "2.6rem",
                    borderRadius: "2.6rem",
                    padding: "0.5rem",
                    objectFit: "contain",
                  }}
                />
              </IconWrapper>
            </a>
          );
        }
        // Default FontAwesome icons
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
          </a>
        );
      })}
    </div>
  );
}
