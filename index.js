let content = document.querySelector(".card-item");
let todos = "todos"
let users = "users"
let posts = "posts"
let comments = "comments"
let albums = "albums"


const brnma = (() => {
    let url = `https://jsonplaceholder.typicode.com/${users}`
    fetch(url)
        .then((response) => response.json())
        .then((response) => {
            response.forEach(element => {
                content.innerHTML +=
                    `
                <div  class ="nn">
                    <div class="card">
            <div class="card-body">
            <h5 class="card-title">${element.name}</h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Email:${element.email}</li>
            <li class="list-group-item">Web site:${element.website}</li>
            <li class="list-group-item">Address:${element.address.city}:${element.address.street}</li>
            <li class="list-group-item">Phone:${element.phone}</li>
          </ul>
          <div class="card-body">
            <a href="./post.html" class="card-link" id ="posts">Posts</a>
            <a href="./todos.html" class="card-link"id ="todos">Todos</a>
            <a href="./albums.html" class="card-link"id ="album">Album</a>
          </div>  
          </div>  
          </div>       
 `
            })
        })
        .catch((err) => {
            console.log(err);
        });
});


brnma();





let content_post = document.querySelector(".card-item-post");

const postsGET = (() => {
    let url = `https://jsonplaceholder.typicode.com/${posts}`
    fetch(url)
        .then((response) => response.json())
        .then((response) => {
            response.forEach(element => {
                content_post.innerHTML +=
                    `
                <div class ="post-wrapper">
                <h4 class="post_title">${element.title}</h4>
                <p class="post_info">${element.body}</p> 
          </div>       
 `
            })
        })
        .catch((err) => {
            console.log(err);
        });
})

postsGET();


let content_todos = document.querySelector(".card-todo-item");

const todosGET = () => {
    let url = `https://jsonplaceholder.typicode.com/${todos}`
    fetch(url)
        .then((response) => response.json())
        .then((response) => {
            response.forEach(element => {
                content_todos.innerHTML +=
                    `
                <div  class ="post-wrapper">
                <h4 class="post_title">${element.title}</h4>
                <p class="post_info">${element.completed}</p> 
          </div>       
 `
            })
        })
        .catch((err) => {
            console.log(err);
        });
}
todosGET();


let content_albums = document.querySelector(".card-item-album");
const albumGET = () => {
    let url = `https://jsonplaceholder.typicode.com/${albums}`
    fetch(url)
        .then((response) => response.json())
        .then((response) => {
            response.forEach(element => {
                content_albums.innerHTML +=
                    `
                <div class ="post-wrapper">

                <h4 class="ost_title" >${element.title}</h4>

                </div>       
 `
            })
        })
        .catch((err) => {
            console.log(err);
        });
}

albumGET();