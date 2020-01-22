import { put, takeLatest, all } from 'redux-saga/effects';

function* getAllDirectors(){
    const url = "http://localhost:8080/directors";

    const json= yield fetch(url, {
      method: "GET"
    })
      .then(res => res.json());
      console.log(json)


      yield put({ type: 'getting', json: json.dname, });
}
    //   .then(data => {console.log(data)
    //   .then(data => {
    //     return {
    //         type:getAll,
    //         movies:data
    //     }
    //   });

    function* actionWatcher() {
        yield takeLatest('getAll', getAllDirectors)
   }


    export default function* rootSaga(){
        yield all([
            actionWatcher(),
        ])
    }