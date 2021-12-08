import React from 'react';
import styled from 'styled-components';

const ChapterStyled = styled.divˋ
ˋ;

const Chapter = ({ children }) => {
    return (
        <ChapterStyled>
            {children}
        </ChapterStyled>
    );
};
