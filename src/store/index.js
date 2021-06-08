import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { albumReducer } from "../reducers/albumReducer";
import rootSaga from "../saga/albumSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    albumReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;