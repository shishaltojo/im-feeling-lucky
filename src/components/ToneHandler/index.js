import React from 'react';
import styled from 'styled-components';

const ToneHandlerStyled = styled.div`
  position: absolute;
  top: 50px;
  right: 30px;

  display: flex;
  flex-direction: column;

  button {
    width: 40px;
    height: 40px;
    cursor: pointer;

    &#white {
      background-color: #fff;
    }

    &#sepia {
      background-color: #ddd06a;
    }

    &#black {
      background-color: #000;
    }
  }
`;

const ToneHandler = () => {
  return(
    <ToneHandlerStyled>
      <button type="button" id="white" />
      <button type="button" id="sepia" />
      <button type="button" id="black" />
    </ToneHandlerStyled>
  )
}

export default ToneHandler;