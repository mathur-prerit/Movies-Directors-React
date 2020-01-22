import { put,takeLatest, all } from "redux-saga/effects";

let json;

function* getAllDirectors() {
  const url = "http://localhost:8080/directors";

  json = yield fetch(url, {
    method: "GET"
  }).then(res => {
    return res.json();
  });
//   console.log(json);

  yield put({ type: "gotData", json });
} 

//   return {
//     movies: action.json
//   };
//   .then(data => {console.log(data)
//   .then(data => {
//     return {
//         type:getAll,
//         movies:data
//     }
//   });

function* actionWatcher() {
  yield takeLatest("getAll", getAllDirectors);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
