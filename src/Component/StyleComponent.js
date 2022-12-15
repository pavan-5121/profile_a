import styled from 'styled-components';
import avatar from "./Avatar/avtar.JPEG";
import greeting from "./Avatar/congratulation.JPEG";
import logo from "./Avatar/logo-header.jpg";
import dateImage from "./Avatar/date.JPEG";
const Container = styled.div`

// background-color: darkslateblue;
padding: 140px;
display:flex;
`;
const AvatarImage = styled.img`
border: 1px solid #ddd;
border-radius: 18px;

width: 200px;
height:200px;

  background-image: url(${avatar});
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  
  transition: transform .5s ease;
  &:hover {
    transform: scale(1.1);
  }
`;
const LeftContainer = styled.div`
display:flex;
flex-direction:column;
`;
const RightContainer = styled.div`
border:4px solid black;
height: 280px;
width: 400px;
margin-left: 50px;
border-radius: 60px;
div:first-child {
    margin-left:60%;
    margin-top:-14%;
};
`;


const Card = styled.div`

box-shadow: 0 4px 8px 0 rgba(0,0,0,0.5);
  transition: 0.3s;
  height:70%;
  border-radius: 18px;
//   background-color: rgb(249, 147, 159);
` ;
  
const CardContainer = styled.div`
padding: 2px 16px;
`;
const GreetingCard = styled.img`
border-radius: 20px;

box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
width: 600px;
height:460px;
transition: transform .5s ease;
&:hover {
  transform: scale(1.07);
}
  background-image: url(${greeting});
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
`;


const LogoHeader = styled.img`
border: 1px solid black;
border-radius: 22px;
width:350px;
height:100px;
background-image: url(${logo});
background-position: center; /* Center the image */
background-repeat: no-repeat; /* Do not repeat the image */
background-size: 340px 80px;/* Resize the background image to cover the entire container */
`
const LogoContainer = styled.div`
margin:0;
margin-top:28%;
`;
const DateImage = styled.img`
    border: 5px solid black;
    border-radius: 100px;
width:100%;
height:100px;
background-image: url(${dateImage});
background-position: center; /* Center the image */
background-repeat: no-repeat; /* Do not repeat the image */
background-size: 340px 80px;/* Resize the background image to cover the entire container */

`
const TopHeader = styled.div`
padding: 18px;
text-align: center;
background: #1abc9c;
color: white;
font-size: 30px;
font-family: cursive;
font-weight: 600;
`;
export {
    TopHeader,
    DateImage,
    LogoContainer,
    Container,
    AvatarImage,
    LeftContainer,
    RightContainer,
    CardContainer,
    Card,
    GreetingCard,
    LogoHeader}