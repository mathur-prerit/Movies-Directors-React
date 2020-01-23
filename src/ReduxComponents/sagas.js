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
  // console.log(data.id)
  const url = "http://localhost:8080/directors/" + data.id;

  const json=yield fetch(url, {
    method: "DELETE"
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    }
  })
  .then(() => alert("Director deleted at:" + data.id))
  // .then(() => actionWatcher());
  yield put({type:'delData'})
};

function* actionWatcher2() {
  yield takeLatest("delOne", deleteDirector);
}

function* getDirectorById(data){
  const id=data.id
  // console.log(typeof id)
  const url = "http://localhost:8080/directors/" + id;

  const json= yield fetch(url, {
    method: "GET"
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
    });
    yield put({ type: "gotOne", json });
};

function* actionWatcher3() {
  yield takeLatest("getOne", getDirectorById);
}

function*  addDirector(data){
  // console.log(data.data)
  const url = "http://localhost:8080/directors/add";

  const json=yield fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data.data)
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
    })
    .then(data => alert("Director added at:" + data));
};

function* actionWatcher4() {
  yield takeLatest("addOne", addDirector);
}


export default function* rootSaga() {
  yield all([
    fork(actionWatcher),
    fork(actionWatcher2),
    fork(actionWatcher3),
    fork(actionWatcher4),
  ]);
}