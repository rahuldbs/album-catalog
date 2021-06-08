import { put, takeLatest, all } from "redux-saga/effects"
import { album } from "../actions/album"
import { getAlbumsApi } from "../albumApi";

export function* getAlbums() {
    yield put({ type: "ALBUMS_REQUEST" });
    try {
        const response = yield getAlbumsApi("photos");
        console.log("agetAlbumsApi response: ", response);
        yield put(album.success(response.slice(0, 200)));
    } catch (error) {
        console.error("getAlbumsApi error: ", error);
        yield put(album.failure(error));
    }
}

export function* watchGetAlbums() {
    yield takeLatest("GET_ALBUMS_REQUEST", getAlbums);
}

export default function* rootSaga() {
    yield all([
        watchGetAlbums()
    ]);
}
