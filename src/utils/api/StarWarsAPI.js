import Axios from "axios";

const URL = 'https://swapi.dev/api/'
const StarWarsAPI = Axios.create({
    baseURL: URL
});

export default StarWarsAPI