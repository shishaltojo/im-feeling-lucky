import React from 'react';
import styled from 'styled-components';

// Components
import Window from '../../components/Window';

const NotePageStyled = styled.div`
  width: 100%;
  height: 100%;

  background-color: grey;
`;

const NotePage = () => {
  return (
    <Window>
      <NotePageStyled />
    </Window>
  );
}

export default NotePage