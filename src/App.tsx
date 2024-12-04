import React from 'react';
import styled from "styled-components";
import logo from "./assets/mainImage.jpg";
import './App.css';

function App() {
    return (
        <StyledDiv>
            <StyledCard>
                <ImgStyled src={logo}/>
                <StyledCardItems>
                    <h1>Headline</h1>
                    <p>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in
                        venen.</p>
                    <ButtonContainer>
                        <ButtonStyled isActive={false}>See more </ButtonStyled>
                        <ButtonStyled isActive={true}>Save</ButtonStyled>
                    </ButtonContainer>
                </StyledCardItems>
            </StyledCard>
        </StyledDiv>
    );
}

const StyledDiv = styled.div`
    width: 300px;
    height: 350px;
    padding: 50px;
`
const StyledCard = styled.div`
    border: 0 solid #ccc;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;

`
const StyledCardItems = styled.div`
    padding: 0 20px;

    h1 {
        margin: 20px 0;
        font-size: 16px;
    }

    p {
        width: 260px;
        height: 40px;
        margin: 8px 0;
        color: #666;
        font-size: 12px;
    }
`
const ButtonContainer = styled.div`

    margin: 19px 0 22px 0;
    width: 300px
`
type propsType = {
    isActive: boolean,
}
const ButtonStyled = styled.button<propsType>`
    background-color: ${(props) => (props.isActive ? "white" : "#4E71FE")};
    color: ${(props) => (props.isActive ? "#007bff" : "#fff")};
    border-color: ${(props) => (props.isActive ? "##007bff" : "#4E71FE")};
    border: solid 1px;
    border-radius: 5px;
    font-size: 10px;
    font-weight: 700;
    width: 86px;
    height: 30px;
    margin-right: 12px;
`
const ImgStyled = styled.img`
    border-radius: 10px;
    width: 280px;
    height: 170px;
    margin: 10px 0 0 10px;
    object-fit: cover;
`

export default App;
