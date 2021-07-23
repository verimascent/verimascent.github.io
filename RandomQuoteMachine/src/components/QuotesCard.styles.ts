import styled, { keyframes, Keyframes } from 'styled-components';

interface IComponentWrapper {
    col: string[][];
    fade: boolean;
}

const changeColor: (props: any) => Keyframes = (props: any) => keyframes`
    from {
        background-color: ${ props.col.length === 2 ? props.col[1][1] : props.col[0][1]};
    }
    to {
        background-color: ${props.col[0][1]};
    }
`;

const fadeInOut = (props: any) => keyframes`
    from {
            opacity: ${ props.fade ? 1 : 0 }
    }

    to {
            opacity: ${ props.fade ? 0 : 1 }
    }
`

export const ComponentWrapper = styled.div<IComponentWrapper>`
    align-self: center;

    #background {
        /* background-color: $; */
        width: 60vw;
        min-height: 10rem;
        display: flex;
        flex-direction: column;
        border-radius: 3rem;
        animation: ${changeColor} 1.5s ease forwards;
        
    }

    #quote-box {
        color: ${props => props.col[0][0] };
        align-self: stretch;
        width: auto;
        height: 100%;
        padding: 10vh 10vw 5vh 10vw;
        display: flex;
        flex-direction: column;
        
    }
    #text {
        font-size: 1.5rem;
    }

    #author {
        margin-top: 3vh;
        align-self: flex-end;
        width: fit-content;
        font-size: 0.9rem;
    }

    #text, #author {
        animation: ${fadeInOut} 1s;
        /* transition: opacity 1s ease; */
    }

    .button-box {
        height: 3rem;
        display: grid;
        margin-top: 3rem;
        grid-template-columns: 1fr 1fr;
    }

    .button-box .twitter {
        margin-top: 0.5rem;
        font-size: 3rem;
        line-height: 100%;
    }

    .button-box .twitter a {
        text-decoration: none;
        color: white;
    } 

    .button-box button {
        justify-self: self-end;
        padding: 0.75rem 0.75rem;
        width: fit-content;
        background-color: yellow;
        box-shadow: inset 1px 1px 10px #333;
        border-radius: 1rem;
    }
`