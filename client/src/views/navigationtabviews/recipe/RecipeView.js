import { useState, useEffect, createContext } from "react";
import StarWarsAPIService from "../../../utils/api/service/StarWarsAPIService";
import { RecipeCard } from "./RecipeCard";

export const CharacterDataContext = createContext();

export const RecipeView = () => {
    const [starWarsData, setStarWarsData] = useState();
    const [count, setCount] = useState(1);

    const makeSureCountWillNeverGoBelowValueOne = () => {
        (count <= 1) ? setCount(1) : setCount(count - 1);
    }

    const getDataFromStarWarsAPI = async () => {
        try {
            const response = await StarWarsAPIService.getStarWarsCharacter(count);
            setStarWarsData(response);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getDataFromStarWarsAPI();
    }, [count]);

    return (
        <div>
            <h1>RecipeView</h1>
            <CharacterDataContext.Provider value={[starWarsData, setStarWarsData]}>
                <div>
                <RecipeCard />
                </div>
            </CharacterDataContext.Provider>
            <button onClick={() => makeSureCountWillNeverGoBelowValueOne()}>Get Previous Character</button>
            <button onClick={() => setCount(count + 1)}>Get Next Character</button>
        </div>
    )
}
