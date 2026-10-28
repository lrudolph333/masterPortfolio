import React from "react";
import styled from "styled-components";
import { socialMediaLinks } from "../../portfolio";
import "./SocialMedia.css";

const IconWrapper = styled.span`
  i {
    background-color: ${(props) => props.backgroundColor};
  }

  img {
    background-color: ${(props) => props.backgroundColor};
  }

  &:hover i,
  &:hover img {
    background-color: ${({ theme }) => theme.text};
    transition: 0.3s ease-in;
  }
`;

const IconifyWrapper = styled.span`
  background-color: ${(props) => props.backgroundColor};

  width: 2.6rem;
  height: 2.6rem;
  border-radius: 50%;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  /* Match spacing of FontAwesome buttons */
  margin: 0 5px;
  vertical-align: middle;

  && .iconify {
    width: 1.6rem;
    height: 1.6rem;
    padding: 0;
    margin: 0;
    border-radius: 0;
    background: transparent;
    display: block;
    marginBottom: -10px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.text};
    transition: background-color 0.3s ease-in;
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
              className="icon-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconifyWrapper {...media} {...props}>
                <i
                  className="iconify"
                  data-icon={media.iconifyClassname}
                  data-inline="false"
                  style={{ color: "white" }}
                />
              </IconifyWrapper>
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
