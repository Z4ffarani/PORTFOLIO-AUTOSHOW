import { useEffect, useState } from 'react'
import styled, { keyframes } from "styled-components"
import { getFavorites} from "../../services/Favorites.js"
import { getRaceCars, postRaceCar, deleteRaceCar, competeCars } from "../../services/Race.js"

const Background = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
    margin-top: -10px;
    padding-bottom: 10px;
    overflow-x: auto;
`
const Background2 = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px;
`
const Card = styled.div`
    display: flex;
    flex-direction: column;
    border: solid blue 3px;
    border-radius: 10px;
    margin: 0px -10px;
    min-width: 300px;
    max-width: 300px;
    height: 100%;
    scale: 85%;
    background-color: #040280;
    position: relative;
`
const blinkCard2 = keyframes`
    0% {
        border: solid blue 2px;
    }
    50% {
        border: solid cyan 2px;
    }
    100% {
        border: solid blue 2px;
    }
`
const Card2 = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    min-width: 300px;
    height: 100%;
    margin: 20px 20px;
    background-color: blue;
    position: relative;
    animation: ${blinkCard2} 3s infinite;
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
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
`
const ImageCar2 = styled.img`
    display: flex;
    width: 310px;
    height: 200px;
    object-fit: cover;
    border-radius: 7px;
`
const ChooseCar = styled.button`
    cursor: pointer;
    color: white;
    font-size: 1rem;
    background-color: transparent;
    border: none;
    font-family: arial;
    padding: 15px;
    opacity: 0.5;
    transition: 150ms ease;
    &:hover {
        opacity: 1;
        background-color: blue;
    }
    &:active {
        opacity: 0.5;
        background-color: transparent;
    }
`
const Remove = styled.button`
    cursor: pointer;
    color: white;
    font-size: 1rem;
    background: none;
    border: none;   
    font-family: arial;
    transition: 100ms ease;
    opacity: 0.5;
    position: absolute;
    margin: 6px 0px 0px 280px;
    scale: 120%;
    &:hover {
        opacity: 1;
    }
    &:active {
        scale: 100%;
        color: red;
        text-shadow: black 0px 0px 20px;
    }
`
const Compete = styled.button`
    cursor: pointer;
    color: white;
    font-size: 3rem;
    background-color: transparent;
    border-radius: 1000px;
    border: solid blue 4px;
    font-family: arial;
    padding: 50px;
    margin: 0px 20px;
    scale: 60%;
    transition: 200ms ease;
    &:hover {
        background-color: blue;
        border: solid cyan 4px;
    }
    &:active {
        background-color: transparent;
        border: solid blue 4px;
    }
`

function Showroom() {
    const [favorites, setFavorites] = useState([])
    const [raceCars, setRaceCars] = useState([])

    useEffect(() => {
        fetchFavorites()
        fetchRaceCars()
    }, [])

    async function fetchFavorites() {
        const favoritesAPI = await getFavorites()
        setFavorites(favoritesAPI)
    }
    
    async function fetchRaceCars() {
        const raceAPI = await getRaceCars()
        setRaceCars(raceAPI)
    }

    async function postCarById(id) {
        await postRaceCar(id)
        fetchRaceCars()
    }

    async function fetchDeleteRaceCar(id) {
        await deleteRaceCar(id)
        fetchRaceCars()
    }

    async function fetchCompeteCars() {
        if (raceCars.length < 2) {
            alert("Not enough cars to compete.")
            return
        }

        const car1 = raceCars.find(car => car.number === 1)
        const car2 = raceCars.find(car => car.number === 2)
        competeCars(car1, car2)

        if (!car1 || !car2) {
            alert("Both cars must be selected for a race.")
            return
        }

        try {
            if (car1.hp > car2.hp) {
                alert(`${car1.name} (${car1.hp} HP) wins against ${car2.name} (${car2.hp} HP)!`)
            } else if (car1.hp < car2.hp) {
                alert(`${car2.name} (${car2.hp} HP) wins against ${car1.name} (${car1.hp} HP)!`)
            } else {
                alert(`${car1.name} and ${car2.name} have the same horsepower (${car1.hp} HP). It's a tie!`)
            }
        } catch (error) {
            console.error("Error competing cars:", error)
            alert("An error occurred while competing the cars.")
        }

        fetchRaceCars()
    }

    return (
        <>
            <Background>
                {favorites.map(favorite => (
                    <Card key={favorite._id}>
                        <CarBrand>{favorite.brand}</CarBrand>
                        <CarYear>{favorite.year}</CarYear>
                        <CarName>{favorite.name}</CarName>
                        <ImageCar src={favorite.image} alt={favorite.name} />
                        <ChooseCar onClick={() => postCarById(favorite._id)}>CHOOSE TO RACE</ChooseCar>
                    </Card>
                ))}
            </Background>
            <Background2>
                {raceCars.map(raceCar => (
                    <Card2 key={raceCar._id}>
                        <CarBrand>{raceCar.brand}</CarBrand>
                        <CarYear>{raceCar.year}</CarYear>
                        <CarName>{raceCar.name}</CarName>
                        <ImageCar2 src={raceCar.image} alt={raceCar.name} />
                        <Remove onClick={() => fetchDeleteRaceCar(raceCar._id)}>✖</Remove>
                    </Card2>
                ))}
                <Compete onClick={fetchCompeteCars}>COMPETE</Compete>
            </Background2>
        </>
    )
}

export default Showroom