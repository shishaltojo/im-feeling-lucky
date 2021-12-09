import React, { useState } from 'react';
import styled from 'styled-components';

// Components
import Window from '../../components/Window';
import ToneHandler from '../../components/ToneHandler';

// Chapters
import Cover from '../../chapters/Cover'

const NotePageStyled = styled.div`
  width: 100%;
  height: 100%;

  background-color: grey;

  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 640px;
    height: 480px;

    background-color: white;

    box-shadow: 10px 10px 0px #aaa;

    h1, h2, p {
      font-family: monospace;

      text-align: center;
    }
  }
`;

const NotePage = () => {
  return (
    <Window>
      <ToneHandler />
      <NotePageStyled>
        <Cover />
      </NotePageStyled>
    </Window>
  );
}

export default NotePage