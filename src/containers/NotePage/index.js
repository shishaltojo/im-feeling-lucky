import React, { useState } from 'react';
import styled from 'styled-components';

// Components
import Window from '../../components/Window';
import ToneHandler from '../../components/ToneHandler';

const NotePageStyled = styled.div`
  width: 100%;
  height: 100%;

  background-color: grey;

  display: flex;
  justify-content: center;
  align-items: center;

  .page {
    width: 640px;
    height: 480px;

    background-color: white;

    box-shadow: 10px 10px 0px #aaa;

    h1, p {
      font-family: monospace;

      text-align: center;
    }
  }
`;

const NotePage = () => {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <Window>
      <ToneHandler />
      <NotePageStyled>
        <div className="page">
          <h1>Diary</h1>
        </div>
      </NotePageStyled>
    </Window>
  );
}

export default NotePage