import React from 'react';
import styled from 'styled-components';

const BottomTextStyled = styled.p`
  margin-top: auto;
`;

const BottomText = ({ children }) => {
  return (
    <BottomTextStyled>{children}</BottomTextStyled>
  );
}

export default BottomText;