
import styled from 'styled-components';
import './HomePageSlide.css';
import { useState, useRef, useEffect } from 'react';

const Container = styled.div`
    display: flex;
    padding: 6em
    height: 305px
    opacity: ${props => props.hiddenValue}
`;

const Pane = styled.div`
    flex: ${props => props.weight};
    padding: 1em;
`;




export function HomePageSlide(props) {
    const [left, right] = props.children;

    return (
        <Container>
            <Pane weight={props.leftWeight}>
                {left}
            </Pane>
            <Pane weight={props.rightWeight}>
                {right}
            </Pane>
        </Container>
    )
}