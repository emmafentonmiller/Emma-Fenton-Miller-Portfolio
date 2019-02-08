import React from 'react';
import styled from 'react-emotion';

const Content = styled.p`
  color: ${props => props.theme.colors.secondary};
  padding: 0 ${props => props.theme.contentPadding};
  text-align: center;
`;

const Footer = () => (
  <Content>
    Contact: <a href = "mailto:emmafentonmiller@gmail.com">emmafentonmiller@gmail.com</a>, &copy; 2019
  </Content>
);

export default Footer;
