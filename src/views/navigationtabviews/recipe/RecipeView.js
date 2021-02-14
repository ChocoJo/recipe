import { useState, useEffect, useContext } from "react"; 
import StarWarsAPIService from "../../../utils/api/service/StarWarsAPIService";

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
        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getDataFromStarWarsAPI();
    }, [count]);

    return (
        <div>
            <h1>RecipeView</h1>
            <h1>Name: {starWarsData?.data?.name}</h1>
            <h1>Gender: {starWarsData?.data?.gender}</h1>
            <h1>Birth year: {starWarsData?.data?.birth_year}</h1>
            <button onClick={() => makeSureCountWillNeverGoBelowValueOne()}>Get Previous Character</button>
            <button onClick={() => setCount(count + 1)}>Get Next Character</button>
        </div>
    )
}
