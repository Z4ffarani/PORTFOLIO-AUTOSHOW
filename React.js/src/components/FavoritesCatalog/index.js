import { useEffect, useState } from 'react'
import styled from "styled-components"
import { getFavorites, deleteFavorite } from "../../services/Favorites.js"

const Background = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`
const Card = styled.div`
    border: solid blue 3px;
    border-radius: 10px;
    width: 300px;
    height: 302px;
    margin: 20px 20px;
    align-items: center;
    background-color: #040280;
    position: relative;
`
const CarBrand = styled.h1`
    user-select: none;
    color: white;
    font-size: 1rem;
    text-align: center;
    font-family: noto sans;
    font-weight: 400;
    margin: 10px 0px 0px 0px;
    opacity: 0.5;
`
const CarYear = styled.h1`
    user-select: none;
    color: white;
    font-size: 1.2rem;
    text-align: center;
    font-family: arial;
    font-weight: 300;
    margin: 5px 0px 0px 0px;
`
const CarName = styled.h1`
    user-select: none;
    color: white;
    font-size: 1.5rem;
    text-align: center;
    font-family: noto sans;
    font-weight: 600;
    margin: 0px 0px 10px 0px;
`
const ImageCar = styled.img`
    display: flex;
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
`
const Remove = styled.button`
    cursor: pointer;
    color: white;
    font-size: 1rem;
    background: none;
    border: none;   
    font-family: arial;
    transition: 50ms ease;
    opacity: 0.5;
    position: absolute;
    margin: -30px 0px 0px 270px;
    &:hover {
        scale: 120%;
        opacity: 1;
    }
    &:active {
        scale: 100%;
        color: red;
        text-shadow: black 0px 0px 20px;
    }
`

function Showroom() {
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        fetchFavorites()
    }, []);

    async function fetchFavorites() {
        const favoritesAPI = await getFavorites()
        setFavorites(favoritesAPI)
    }

    async function fetchDeleteFavorite(id) {
        await deleteFavorite(id)
        fetchFavorites()
    }

    return (
        <Background>
            {favorites.map(favorite => (
                <Card key={favorite._id}>
                    <CarBrand>{favorite.brand}</CarBrand>
                    <CarYear>{favorite.year}</CarYear>
                    <CarName>{favorite.name}</CarName>
                    <ImageCar src={favorite.image} alt={favorite.name} />
                    <Remove onClick={() => fetchDeleteFavorite(favorite._id)}>✖</Remove>
                </Card>
            ))}
        </Background>
    )
}

export default Showroom