import React from 'react';
import styled from 'styled-components';

class Item extends React.Component {
    handdleClick = () => {
        const { url } = this.props;
        window.location = url;
    }

    render() {
        const { title, content } = this.props;
        
        return (
            <Container onClick={this.handdleClick}>
                <h3>{title}</h3>
                <p>{content}</p>
            </Container>
        );
    }
};

const Container = styled.div`
    padding: 2px 8px;
    cursor: pointer;
    margin-bottom: 3px;
    background-color: #c6c3ff;
    background-position: center;
    transition: background 0.8s;

    &:hover {
        background: #47a7f5 radial-gradient(circle, transparent 1%, #47a7f5 1%) center/15000%;
    }
    &:active {
       background-color: #6eb9f7;
       background-size: 100%;
       transition: background 0s;
    }
`;

export default Item;