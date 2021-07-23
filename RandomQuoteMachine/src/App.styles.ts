import styled, { createGlobalStyle, Keyframes, keyframes } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
`;

interface IColors {
    colorBody: string[][];
}

const changeColor: (props: any) => Keyframes = (props: any) => keyframes`
    from {
        background-color: ${ props.colorBody == undefined? "rgb(255,255,255)" : 
                             props.colorBody.length === 2 ? props.colorBody[1][0] : props.colorBody[0][0] };
    }
    to {
        background-color: ${props.colorBody == undefined ? "rgb(255, 255, 255)" : props.colorBody[0][0]};
    }
`;

export const BodyWrapper = styled.body<IColors>`

    display: flex;
    animation: ${changeColor} 1.5s ease forwards;
    height: 100vh;
    justify-content: center;
   
`;

