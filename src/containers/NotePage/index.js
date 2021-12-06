import React from 'react';
import styled from 'styled-components';

// Components
import Window from '../../components/Window';

const NotePageStyled = styled.div`
  width: 100%;
  height: 100%;

  background-color: grey;

  display: flex;
  justify-content: center;
  align-items: center;

  .page {
    width: 600px;
    height: 480px;

    background-color: white;

    box-shadow: 10px 10px 0px #aaa;
  }
`;

const NotePage = () => {
  return (
    <Window>
      <NotePageStyled>
        <div className="page"></div>
      </NotePageStyled>
    </Window>
  );
}

export default NotePage