import axios from '../utils/axiosGlobalSettings';

import { GET_ERRORS, ADD_POST, GET_POSTS, POST_LOADING, DELETE_POST, GET_POST } from './types';

/**
 * Add post
 */

export const addPost = postData => dispatch => {
    axios
        .post('/api/posts', postData)
        .then(res => 
            dispatch({
                type: ADD_POST,
                payload: res.data
            })
        )
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )
}


export const getPosts = () => dispatch => {

    dispatch(setPostLoading());
    
    axios
        .get('/api/posts')
        .then(res =>
            dispatch({
                type: GET_POSTS,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_POSTS,
                payload: null
            })
        )
}

export const getPost = id => dispatch => {

    dispatch(setPostLoading());

    axios
        .get(`/api/posts/${id}`)
        .then(res =>
            dispatch({
                type: GET_POST,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_POSTS,
                payload: null
            })
        )
}


/**
 * Delete post
 */

export const deletePost = id => dispatch => {
    axios
        .delete(`/api/posts/${id}`)
        .then(res =>
            dispatch({
                type: DELETE_POST,
                payload: id
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )
}

/**
 * Add link
 */

export const addLike = id => dispatch => {
    axios
        .post(`/api/posts/like/${id}`)
        .then(res =>
            dispatch(getPosts())
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )
}

/**
 * Remove link
 */

export const removeLike = id => dispatch => {
    axios
        .post(`/api/posts/unlike/${id}`)
        .then(res =>
            dispatch(getPosts())
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )
}

/**
 * Set loading state
 */

 export const setPostLoading = () => {
     return {
         type: POST_LOADING
     }
 }
