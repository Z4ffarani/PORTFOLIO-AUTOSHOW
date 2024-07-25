import styled from "styled-components"
import { useEffect, useState } from 'react'
import { getCars, postCar } from "../../services/Home.js"

const BackgroundSearch = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px 0px 40px 0px;
`
const TextBox = styled.input`
    padding: 10px 25px;
    width: 400px;
    color: black;
    font-size: 1.4rem;
    border: solid #0e0afa 3px;
    color: white;
    border-radius: 30px;
    background: none;
    font-family: noto sans;
    transition: 200ms ease;
    &:focus {
        outline: none;
        background-color: #040280;
        scale: 105%;
    }
`
const BackgroundShowroom = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`
const Card = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    border: solid #0e0afa 3px;
    border-radius: 10px;
    width: 300px;
    height: 360px;
    margin: 20px 20px;
    overflow: hidden;
    align-items: center;
    background-color: #0e0afa;
`
const CarBrand = styled.h1`
    user-select: none;
    position: relative;
    z-index: 2
    user-select: none;
    color: white;
    font-size: 1rem;
    text-align: center;
    font-family: noto sans;
    font-weight: 400;
    margin: -10px;
    transition: 300ms ease;
        ${Card}:hover & {
        margin-top: 15px;
    }
`
const CarName = styled.h1`
    position: relative;
    z-index: 2;
    user-select: none;
    color: white;
    font-size: 1.5rem;
    text-align: center;
    font-family: noto sans;
    font-weight: 600;
    text-shadow: #0e0afa 0px 0px 10px;
    transition: 1000ms ease;
        ${Card}:hover & {
        opacity: 1;
        text-shadow: none;
    }
`
const Options = styled.div`
    padding: 10px;
    text-align: center;
    opacity: 0;
    transition: 1000ms ease;
        ${Card}:hover & {
        opacity: 1;
    }
`
const Favorite = styled.button`
    cursor: pointer;
    color: white;
    font-size: 1rem;
    font-weight: 500;
    background: none;
    border: solid 2px white;
    border-radius: 50px;
    margin-top: 2px;
    padding: 13px 20px;
    font-family: arial;
    transition: 250ms ease;
    opacity: 0.5;
    &:hover {
        opacity: 1;
    }
    &:active {
        background-color: #040280;
        scale: 95%;
    }
`
const ImageCar = styled.img`
    max-width: 300px;
    height: 200px;
    object-fit: cover;
    display: flex;
    position: relative;
    z-index: 1;
    scale: 200%;
    transition: 300ms ease;
    border-radius: 10px;
    ${Card}:hover & {
        scale: 100%;
    }
`

function Showroom() {
    const [cars, setCars] = useState([])
    const [allCars, setAllCars] = useState([])

    useEffect(() => {
        fetchCars()
    }, [])

    async function fetchCars() {
        const carsAPI = await getCars()
        setCars(carsAPI)
        setAllCars(carsAPI)
    }

    async function fetchPostCar(id) {
        await postCar(id)
        const carToFavorite = cars.find(car => car._id === id)
        alert(`${carToFavorite.name} added to Favorites.`)
    }

    return (
        <>
            <BackgroundSearch>
                <TextBox
                    placeholder="Search for a car"
                    onChange = {event => {
                        const searchText = event.target.value.toLowerCase()

                        if (searchText === "") {
                            setCars(allCars)
                        } else {
                            const searchResult = allCars.filter(car => car.name.toLowerCase().includes(searchText))
                            setCars(searchResult)
                        }
                    }}
                />
            </BackgroundSearch>
        
            <BackgroundShowroom>
                {cars.map(car => (
                    <Card key={car._id}>
                        <CarBrand>{car.brand}</CarBrand>
                        <CarName>{car.name}</CarName>
                        <ImageCar src={car.image} alt={car.name} />
                        <Options>
                            <Favorite onClick={() => fetchPostCar(car._id)}>ADD TO FAVORITES</Favorite>
                        </Options>
                    </Card>
                ))}
            </BackgroundShowroom>
        </>
    )
}

export default Showroom