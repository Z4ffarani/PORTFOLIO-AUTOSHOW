import styled from "styled-components"
import { Link } from "react-router-dom"

const Title = styled.div`
    text-align: center;
    background-color: #0e0afa;
    font-size: 3rem;
    font-weight: 700;
    font-family: noto sans;
    color: white;
    padding: 20px;
    user-select: none;
`
const Background = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 25px;
    background: linear-gradient(180deg, #040280, #000117);
`
const Subtitle = styled(Link)`
    cursor: pointer;
    padding: 10px 20px;
    margin: 0px 5px;
    color: white;
    font-size: 1.6rem;
    font-weight: 500;
    font-family: arial;
    background: none;
    border: solid 3px transparent;
    border-radius: 50px;
    text-decoration: none;
    transition: 200ms ease;
    &:hover {
        border: solid 3px #0e0afa;
        background-color: #040280
    }
    &:active {
        border: solid 3px #0e0afa;
        background-color: transparent;
        scale: 95%;
    }
`

function Header() {
    return (
        <>
        <Title>AUTOSHOW</Title>
        <Background>
            <Subtitle to={"/"}>HOME</Subtitle>
            <Subtitle to={"/favorites"}>FAVORITES</Subtitle>
            <Subtitle to={"/race"}>RACE!</Subtitle>
        </Background>
        </>
    )
}   

export default Header