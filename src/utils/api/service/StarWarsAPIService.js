import http from "../StarWarsAPI";

const getDataLukeSkywalker = () => {
    return http.get('/people/1')
}

const getStarWarsCharacter = (characterNumber) => {
    return http.get(`/people/${characterNumber}`)
}

export default {
    getDataLukeSkywalker,
    getStarWarsCharacter
}