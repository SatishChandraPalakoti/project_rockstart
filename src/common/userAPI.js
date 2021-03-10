const ENDPOINT = "https://jsonplaceholder.typicode.com/users/";

export function getUsers(){
    return fetch(ENDPOINT).then(Response =>{
        if(!Response.ok) throw Error(Response.statusText)
        return Response.json();
    }).then(json=>json);
}