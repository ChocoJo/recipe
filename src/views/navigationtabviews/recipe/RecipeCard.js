import React from 'react'
import { CharacterDataContext } from './RecipeView'
import { useContext } from "react";

export const RecipeCard = () => {
    const [starWarsData, setStarWarsData] = useContext(CharacterDataContext);
    return (
        <div>
            <h1>RecipeCard</h1>
            <h1>Name: {starWarsData?.data?.name}</h1>
            <h1>Gender: {starWarsData?.data?.gender}</h1>
            <h1>Birth year: {starWarsData?.data?.birth_year}</h1>
        </div>
    )
}
