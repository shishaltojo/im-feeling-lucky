import React from 'react';
import styled from 'styled-components';

const ChapterStyled = styled.div`
    display: flex;
    flex-direction: column;
`;

const Chapter = ({ children }) => {
    return (
        <ChapterStyled>
            {children}
        </ChapterStyled>
    );
};

export default Chapter;