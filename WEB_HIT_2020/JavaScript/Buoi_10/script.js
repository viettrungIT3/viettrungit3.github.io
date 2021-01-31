const  root = document.getElementById("root");

// console.log(root);

// root.style.color = 'red'
// root.style.fontSize = '48px'

// root.innerHTML = "<h1>HIT CLUB</h1>"

const API = "http://demo.hoangduykhanh.com/api/products"

const res = fetch(API);
// res.then(data => {
//     console.log(data);
// })

// res.then( data => data.json()).then( val => {
//     let element = "";
//     val.data.map( (v,i) => {
//         element += `
//         <div class="col">
//         <div class="card" style="width: 18rem;">
//             <img src="${v.thumb}" class="card-img-top" alt="...">
//             <div class="card-body">
//               <h5 class="card-title">${v.name}</h5>
//               <p class="card-text">${description}</p>
//               <a href="#" class="btn btn-primary">${v.price}</a>
//             </div>
//         </div>
//     </div>
        
        
//         `
//     })
// })

async function fetchData( api) {
    try {
        const res = await fetch( api);

        const data = await res.json();

        console.log(data);
    } catch (error) {
        console.log("Error: ", error.message);
    }
    
}

fetchData( API);