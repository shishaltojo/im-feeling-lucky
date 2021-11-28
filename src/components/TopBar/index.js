import React from 'react';
import styled from 'styled-components';

// Assets
import minimize from '../../assets/minimize.svg';
import maximize from '../../assets/maximize.svg';
import close from '../../assets/close.svg';

const StyledComponent = styled.div`
  button {
    background-color: blue;
    width: 200px;
    height: 200px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const TopBar = () => {
  return (
    <StyledComponent>
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