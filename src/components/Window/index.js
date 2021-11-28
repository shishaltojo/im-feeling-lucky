import React from 'react';
import styled from 'styled-components';

// Components
import TopBar from '../TopBar';

const StyledComponent = styled.div``;

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