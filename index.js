// import http from "http"

// const server = http.createServer((req, res) =>{
//     const url =req.url
//     console.log(url);
//     res.write("Hello Server!")
//     res.end()

// }).listen(5500,console.log("Server is listening on port " + 5500))



//-------------------------------------------------------------------------------
// Second example - Below
//---------------------

// import http from "http";
// import fetch from "node-fetch";
// import { createDeflateRaw } from "zlib";

// const server = http.createServer((req, res) => {
//     const url = req.url;
//     let tabledata =
//       "<table border='1'><tr><th>ID</th><th>Name</th><th>Username</th><th>Email</th><th>Address</th><th>Phone Number</th></table>";

      //fixed//  "<table border='1'><tr><th>ID</th><th>Name</th><th>Username</th><th>Email</th><th>Address</th><th>Phone Number</th></tr>";

//     if (url === '/') {
//       res.write("Home Page");
//       res.end();
//     }
//     if (url === "/message") {
//       res.write("Welcome to my Message page")
//       res.end();
//     }
//     if (url === '/list') {
//       fetch('https://jsonplaceholder.typicode.com/users')
//         .then(res => res.json())
//         .then(data => {
//           createData(data)
//           res.write(tabledata) 
//           res.end()
//         })
//     }

//     function createData(data) {
//       data.forEach(element => {
//         tabledata+=`<tr><td>${element.id}</td><td>${element.name}</td><td>${element.username}</td><td>${element.email}</td><td>${element.address.street}</td><td>${element.phone}</td</tr>`
//       });
//       tabledata+= `</table>`
//     }

// }).listen(5500, console.log(`Server is listening on port 5500`))


// import http from "http";
// import fetch from "node-fetch";
// import { createDeflateRaw } from "zlib";

// const server = http.createServer((req, res) => {
//     const url = req.url;
//     let tabledata =
//       "<table border='1'><tr><th>ID</th><th>Name</th><th>Username</th><th>Email</th><th>Address</th><th>Phone Number</th></tr>";
//     if (url === '/') {
//       res.write("Home Page");
//       res.end();
//     }
//     if (url === "/message") {
//       res.write("Welcome to my Message page")
//       res.end();
//     }
//     if (url === '/list') {
//       fetch('https://jsonplaceholder.typicode.com/users')
//         .then(res => res.json())
//         .then(data => {
//           createData(data)
//           res.write(tabledata) 
//           res.end()
//         })
//     }

//     function createData(data) {
//       data.forEach(element => {
//         tabledata+=`<tr><td>${element.id}</td><td>${element.name}</td><td>${element.username}</td><td>${element.email}</td><td>${element.address.street}</td><td>${element.phone}</td></tr>`
//       });
//       tabledata+= `</table>`
//     }

// }).listen(5500, console.log(`Server is listening on port 5500`))




// import http from "http";
// import fetch from "node-fetch";
// import { createDeflateRaw } from "zlib";


// const server = http.createServer((req, res) => {
//     const url = req.url;
//     let tabledata =
//       "<table border='1'><tr><th>Name</th><th>Height</th><th>Mass</th><th>Hair Color</th><th>Skin Color</th><th>Birth Year</th><th>Gender</th></tr>";
//     if (url === '/') {
//       res.write("Welcome!");
//       res.write("<img src='https://unsplash.com/photos/QnkzvFCxKrA' alt='image'>");
//       res.end();
      
//     }
//     if (url === "/") {
//       res.write("Error!")
//       res.end();
//     }
//     if (url === '/list') {
//       fetch('https://swapi.dev/api/people')
//         .then(res => res.json())
//         .then(data => {
//           createData(data);
//           res.write(tabledata);
//           res.end();
//         })
//         .catch(error => {
//           console.error(error);
//           res.writeHead(500, {'Content-Type': 'text/plain'});
//           res.write('Internal Server Error');
//           res.end();
//         });
//     }

//     function createData(data) {
//       data.results.forEach(element => {
//         tabledata+=`<tr><td>${element.name}</td><td>${element.height}</td><td>${element.mass}</td><td>${element.hair_color}</td><td>${element.skin_color}</td><td>${element.birth_year}</td><td>${element.gender}</td></tr>`;
//       });
//       tabledata+= `</table>`;
//     }
// }).listen(5500, console.log(`Server is listening on port 5500`));

import http from "http";
import fetch from "node-fetch";
import { createDeflateRaw } from "zlib";

const server = http.createServer((req, res) => {
  const url = req.url;
  let tabledata = "<table border='1'><tr><th>Name</th><th>Height</th><th>Mass</th><th>Hair Color</th><th>Skin Color</th><th>Birth Year</th><th>Gender</th></tr>";
  switch (url) {
    case '/':
      res.write("Welcome!");
      res.write("<img src='https://unsplash.com/photos/QnkzvFCxKrA' alt='image'>");
      res.end();
      break;
    case '/list':
      fetch('https://swapi.dev/api/people')
        .then(res => res.json())
        .then(data => {
          createData(data);
          res.write(tabledata);
          res.end();
        })
        .catch(error => {
          console.error(error);
          res.write('Internal Server Error');
          res.end();
        });
      break;
    default:
      res.write('Page not found');
      res.end();
  }

  function createData(data) {
    data.results.forEach(element => {
      tabledata+=`<tr><td>${element.name}</td><td>${element.height}</td><td>${element.mass}</td><td>${element.hair_color}</td><td>${element.skin_color}</td><td>${element.birth_year}</td><td>${element.gender}</td></tr>`;
    });
    tabledata+= `</table>`;
  }
}).listen(5500, console.log(`Server is listening on port 5500`));

