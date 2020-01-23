import { put,takeLatest, all,fork } from "redux-saga/effects";


function* getAllDirectors() {
  const url = "http://localhost:8080/directors";

  const json = yield fetch(url, {
    method: "GET"
  }).then(res => {
    return res.json();
  });
//   console.log(json);

  yield put({ type: "gotData", json });
} 


function* actionWatcher() {
  yield takeLatest("getAll", getAllDirectors);
}
 

function* deleteDirector(data){
  console.log(data.id)
  const url = "http://localhost:8080/directors/" + data.id;

  const json=yield fetch(url, {
    method: "DELETE"
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    }
  })
  .then(() => alert("Movie deleted at:" + data.id))
  // .then(() => actionWatcher());
  yield put({type:'delData'})
};

function* actionWatcher2() {
  yield takeLatest("delOne", deleteDirector);
}

export default function* rootSaga() {
  yield all([
    fork(actionWatcher),
    fork(actionWatcher2),
  ]);
}