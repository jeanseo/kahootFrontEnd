import {responsePathAsArray} from "graphql";

const APIURL = "http://localhost:8080/api";

export const updateQuiz = async (data) => {
    console.log(data);
    const response = await fetch(`${APIURL}/quizzes/${data._id}`, {
        method: "PUT",
        mode: "cors",
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).catch((err)=>console.log(err));
    console.log('quiz updaté dans l\'api');
    return response;
};

export const getQuiz = async (id) => {
    const response = await fetch(`${APIURL}/quizzes/${id}`, {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
    }).catch((err)=>console.log(err));
    return response.json();
};

export const deleteQuiz = async (id) => {
    console.log(id);
    const response = await fetch(`${APIURL}/quizzes/${id}`, {
        method: "DELETE",
        mode: "cors",
        cache: "no-cache",
    }).catch((err)=>console.log(err));
    return response.json();
};

export const createGameRequest = async (id) => {

    const response = await fetch(`${APIURL}/games/${id}`, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
    }).catch((err)=>{console.log(err) });
    return response.json();
};