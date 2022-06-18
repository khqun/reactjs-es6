import axios from "axios"
// axios.get('/user?ID=1')
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
axios.post('/users', {
    firstName: 'First name',
    lastName: 'Last name'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });