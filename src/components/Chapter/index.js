import React from 'react';
import styled from 'styled-components';

const ChapterStyled = styled.div``;

const Chapter = ({ children }) => {
    return (
        <ChapterStyled>
            {children}
        </ChapterStyled>
    );
};

export default Chapter;