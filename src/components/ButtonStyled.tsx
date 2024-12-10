import styled from "styled-components";
import myThemeStyled from "../styles/myThemeStyled";

type propsType = {
    isActive?: boolean,
}
export const ButtonStyled = styled.button<propsType>`
    border: solid 1px;
    border-radius: 5px;
    font-size: 10px;
    font-weight: 700;
    width: 86px;
    height: 30px;
    margin-right: 12px;
    border-color: ${myThemeStyled.colors.blue};
    background-color: ${props => (props.isActive ? "transparent" : myThemeStyled.colors.blue)};
    color: ${props => (props.isActive ? myThemeStyled.colors.blue : "#fff")};

`