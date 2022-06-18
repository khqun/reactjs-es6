    import axios from "axios";

    async function getToDo(Id) {
        try {
            return await axios.get(`https://jsonplaceholder.typicode.com/todos/${Id}`);
        } catch (error) {
           throw new Error(error)
        }
    }
    const respone = getToDo(3);
    respone.then(respone => console.log(respone.data)).catch(error =>{
        console.log(error);
    })
// a promise
// function getValueA(a){
//      return a;
// }
// function getValueB(b){
//      return b;
// }
// function getValueC(c){
//      return c;
// }
// getValueA(8);
// async  function  getABC () {
//      let A = await getValueA(5); // getValueA takes 2 second to finish
//      let B = await getValueB(7); // getValueB takes 4 second to finish
//      let C = await getValueC(8); // getValueC takes 3 second to finish

//      return A*B*C;
//    }
// getABC().then(function(abc){
//      console.log(abc);
// })
// async function
// const promise = new Promise(function(resolve,){
//      resolve(false);

// })

// async function asyncFunc(){
 
// 	// wait until the promise resolves 
// 	let result = await promise; 
 
// 	console.log(result); 
// 	console.log('hello'); 
// }
// asyncFunc();
// a promise
// let promise = new Promise(function (resolve) { 
// 	setTimeout(function () { 
// 	resolve('Promise resolved')}, 0); 
// });
// let promise = new Promise((resolve,reject)=>{
//      setTimeout(()=>{
//           resolve('promise')
//      },0)
// })
// function call(a) {
//      console.log(a);
// }
// // async function
// async function asyncFunc() { 
     
// 	// wait until the promise resolves 
// 	let result =  await promise; 
     
// 	console.log(result); 
//      call("hi")
// 	console.log('hello'); 
//      console.log(promise.data);
// }
// asyncFunc();