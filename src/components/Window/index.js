import React from 'react';
import styled from 'styled-components';

import theme from '../../utils/theme';

// Components
import TopBar from '../TopBar';

const StyledComponent = styled.div`
  width: 100vw;
  height: 100vh;

  box-sizing: border-box;

  border-color: ${theme.palette.primary.main};
  border-style: solid;
  border-width: 4px;
  border-top-left-radius: ${theme.rounding.default};
  border-top-right-radius: ${theme.rounding.default};

  #window-content {
    height: 95%;
    width: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
  }
`;

const Window = ({ children }) => {
  return (
    <StyledComponent>
      <TopBar />
      <div id="window-content">
        {children}
      </div>
    </StyledComponent>
  );
}

export default Window;