import axios from 'axios';

const baseURL = 'https://star-wars-app-unifacef.herokuapp.com/';

export const getFilms = async () => {
    return axios.request({
        baseURL,
        url: 'films'
    })
}

export const getFilmById = async (id: number) => {
    return axios.request({
        baseURL,
        url: `films/${id}`
    })
}