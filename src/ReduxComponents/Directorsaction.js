

export const getAll='getAll';
export const gotData='gotData'

export const getAllDirectors = () => ({
  type: 'getAll',
});


// export const getAllDirectors = () => {
//     const url = "http://localhost:8080/directors";
//     return fetch(url, {
//       method: "GET"
//     })
//       .then(res => res.json())
//     //   .then(data => {console.log(data)
//       .then(data => {
//         return {
//             type:getAll,
//             movies:data
//         }
//       });
//   };
