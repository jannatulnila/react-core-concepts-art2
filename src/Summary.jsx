/**
 * components
 * jsx
 * props
 * state
 * [Conditional Rendering]
 * / 

/**
 * 1.Api: url: https://jsonplaceholder.typicode.com/users
 * */

/**
 * Just write a simple fetch with json conversion
 * Wrap the data loading component  under suspense
 * 
 *  */ 



// fetch ("https://jsonplaceholder.typicode.com/users")
// .then (res => res.json())
// .then (data => console.log(data))

// const loadDAta = async()=> {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users');
//     const Data = res.json();
//     return data;
// }

/**
 * 1.event tigger 
 * 2.state
 * 3.data load from api
 * 5.loop through to display data 
 * 5.why we use key props
 * / 