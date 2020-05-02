const APIURL = "http://localhost:8080/api";

export const editQuiz = async (data) => {
    const response = await fetch(`${APIURL}/quizzes`, {
        method: "PUT",
        mode: "cors",
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).catch((err)=>console.log(err));
    return response;
};