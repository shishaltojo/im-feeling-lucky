import React from 'react';
import styled from 'styled-components';

import theme from '../../utils/theme';

// Assets
import minimize from '../../images/minimize.svg';
import maximize from '../../images/maximize.svg';
import close from '../../images/close.svg';

const StyledComponent = styled.div`
  background-color: ${theme.palette.primary.main};

  display: flex;
  flex-direction: row;

  h1 {
    font-family: ${theme.typography.font.default};
    color: white;
    letter-spacing: ${theme.typography.letterSpacing.default};
    text-shadow: ${theme.typography.textShadow.default};
    font-size: ${theme.typography.fontSize.h1};
  }

  button {
    width: 19px;
    height: 19px;

    padding: 3px;
    margin: 1px;

    border-color: white;
    border-style: solid;
    border-width: 1px;

    border-radius: 2px;
  }

  #minimize-button,
  #maximize-button {
    background-color: ${theme.palette.primary.main};
  }

  #close-button {
    background-color: ${theme.palette.error.main};
  }
`;

const TopBar = () => {
  return (
    <StyledComponent>
      <h1>Google search</h1>
      <button id="minimize-button" type="button">
        <img src={minimize} alt="minimize" />
      </button>
      <button id="maximize-button" type="button">
        <img src={maximize} alt="maximize" />
      </button>
      <button id="close-button" type="button">
        <img src={close} alt="close" />
      </button>
    </StyledComponent>
  );
};

export default TopBar;