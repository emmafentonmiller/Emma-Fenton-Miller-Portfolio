import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import Overdrive from 'react-overdrive';
import { FaInstagram } from 'react-icons/fa';

const Wrapper = styled.div`
    background: url("${props => props.theme.bgPattern}") #fff;
    display: flex;
    position: relative;
`;

const Content = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidths.general};
  padding: 3rem 1.0875rem 10rem 1.0875rem;
  color: ${props => props.theme.colors.secondary};
  text-align: center;
`;

// const Avatar = styled.div`
//  height: 125px;
 // width: 125px;
//  margin: 0 auto;
//  image-rendering: -moz-crisp-edges;
//  image-rendering: -o-crisp-edges;
//  image-rendering: -webkit-optimize-contrast;
//  -ms-interpolation-mode: nearest-neighbor;
//
//  img {
//    border-radius: 50%;
//  }
//`;

const Name = styled.h1`
  margin: 1rem 0 0.25rem 0;
  color: ${props => props.theme.colors.color};
`;

const Location = styled.div`
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SocialMedia = styled.div`
  margin-top: 2rem;

  a {
    font-size: 1.5rem;
    line-height: 50px;
  }
  @media (max-width: ${props => props.theme.maxWidths.general}) {
    padding: 0 1rem;
  }

`;

const Header = ({ name, location, socialMedia }) => (
  <Wrapper>
    <Content>
      <Overdrive id="name-to-back">
        <Name>{name}</Name>
      </Overdrive>
      <Location>{location}</Location>
      <SocialMedia>
        {socialMedia.map(social => (
          <a key={social.name} href={social.url} rel="noopener noreferrer" target="_blank">
            <FaInstagram size={35} />
          </a>
        ))}
        
      </SocialMedia>
    </Content>
  </Wrapper>
);

export default Header;

Header.propTypes = {
//  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  socialMedia: PropTypes.array.isRequired,
};
