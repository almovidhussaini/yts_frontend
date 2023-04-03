import { createSlice, createAsyncThunk, }  from '@reduxjs/toolkit';
// const axios = require('axios')
import axios from 'axios';
const initialState = {
    alMovies :[],
    singleMovie : [],
    suggesstedMovie:[],
    browseMovieData:[],
    loginInfo:false,
    registerPage:false,
}

export const getAllMovies = createAsyncThunk (
    'movies/allMovies' ,
    async() => {
        try {
            
            let myMovies = await axios.get('https://yts.mx/api/v2/list_movies.json')
            return myMovies
        }
        catch(err) {
            return err
        }
    }
)

export const getSpecificMovie = createAsyncThunk (

    'movies/getAllMovie' ,
    async(movieId) => {
        try {
            let myMovie = await axios.get(` https://yts.mx/api/v2/movie_details.json?movie_id=${movieId}`)
            return myMovie
        }
        catch(err) {
            return err
        }
    }
)

export const suggesstedMovie = createAsyncThunk(
    'suggessted/SuggesstedMovie',
    async(movieId) => {
        try{
            let myMovie = await axios.get(`https://yts.mx/api/v2/movie_suggestions.json?movie_id=${movieId}`)
            return myMovie
        }catch(err) {
            return err
        }
    }
)

export const getBrowseMovies = createAsyncThunk(
    'browseMovie/GetBrowseMovie',
    async( payload ) => {
        try{
            // console.log(process.env.REACT_APP_BrowseMoviesUrl,'browseMoviesUrl')
            let movies  = await axios.get(`https://yts.mx/api/v2/list_movies.json?page=${payload}`)

            return movies
        }
        catch(err) {
            return err
        }
    }
)

const  MoviesSlice = createSlice({
    name: 'mySlice',
    initialState,

    extraReducers : {
        [getAllMovies.fulfilled]:(state,{payload}) => {
            state.alMovies = payload.data.data.movies;
        },

        [getAllMovies.rejected]: ({payload}) => {
            console.log(payload,'movies rejected')
        },
        [getSpecificMovie.fulfilled]: (state,{payload}) => {
            state.singleMovie = payload.data.data.movie;
        },
        [getSpecificMovie.rejected]: ({payload}) => {
            console.log(payload,'rejected')
        },
        [suggesstedMovie.fulfilled]: (state,{payload}) => {
            state.suggesstedMovie = [payload.data.data.movies]
        },
        [suggesstedMovie.rejected]: (state,{payload}) => {
            console.log(' suggessted movie rejected')
        },
        [getBrowseMovies.fulfilled]: (state,{payload}) => {
            state.browseMovieData = payload.data.data.movies;
        },
        [getBrowseMovies.rejected]: () => {
            console.log('responce rejected')
        }
    }
})
export default MoviesSlice.reducer;