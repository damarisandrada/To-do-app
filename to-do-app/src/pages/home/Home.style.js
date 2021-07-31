import styled from "styled-components";

export const Container = styled.div`
 width: 100vw;
 height: 83vh;
 margin: 0 auto;
 background-color: #F3EAAF;
 display: flex;
 justify-content: center;
 align-items: center;
`;

export const ListContainer = styled.div`
width: 60%;
height: 90%;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-content: space-around;
`;

export const Tasks = styled.div`
height: 67%;
width: 95%;
background-color: white;
display: flex;
flex-direction: column;
`;

export const Newtask = styled.div`
height: 30%;
width: 95%;
background-color: white;
display: flex;
flex-wrap: wrap;
`;

export const H4 = styled.h4`
margin-top: 3%;
margin-left: 5%;
width: 70%;
font-size: larger;
font-weight: bolder;
`;
