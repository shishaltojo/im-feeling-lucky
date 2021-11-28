import React from 'react';
import styled from 'styled-components';

import theme from '../../utils/theme';

// Assets
import minimize from '../../assets/minimize.svg';
import maximize from '../../assets/maximize.svg';
import close from '../../assets/close.svg';

const StyledComponent = styled.div`
  background-color: ${theme.palette.primary.main};

  display: flex;
  flex-direction: row;

  button {
    width: 200px;
    height: 200px;
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