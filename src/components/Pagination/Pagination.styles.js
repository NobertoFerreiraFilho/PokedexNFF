import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem;
    justify-content: center;
    align-items: center;
    text-align: center;

    button{
        background: none;
        border: none;
        border-radius: 5px;
        background-color: lightgrey;
        margin: 0px 1rem;
        cursor: pointer;
    }
    label {
        display: flex;
        flex-direction: column;
        text-transform: capitalize;
        font-weight: bold;
        font-size: 0.7rem;
        margin-top: 0.8rem;
        color: lightgrey;
        width: 60px;
    }

    select {
        background-color: lightgray;
        cursor: pointer;
        outline: none;
        
    }
`;

export const Content = styled.div`
    display: flex;
    color: lightgray;
    font-weight: 900;
    
    
    .pagination{
        display: flex;
    }
`;