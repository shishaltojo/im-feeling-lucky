import React from 'react';

import TopBar from '../TopBar';

const Window = ({ children }) => {
  return (
    <div>
      <TopBar />
      <div id="window-content">
        {children}
      </div>
    </div>
  );
}

export default Window;