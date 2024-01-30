
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    padding: 1em
`;

const Pane = styled.div`
    flex: ${props => props.weight};
    padding: 1em;
`;

export const SplitScreen = ({
    children,
    leftWeight = 1,
    rightWeight = 1
}) => {
    const [left,right] = children;
    return (
    <Container>
        <Pane weight = {leftWeight}>
            {left}
        </Pane>
        <Pane weight = {rightWeight}>
            {right}
        </Pane>
    </Container>
    )
}