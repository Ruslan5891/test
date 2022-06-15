import { takeEvery, select, call, put } from "redux-saga/effects";
import { getPhotos } from "../../api";
import { setImages, setError } from "../actions/actionCreator";
import { PHOTOS_ERROR, GET_PHOTOS, SET_PHOTOS } from "../constants";
import { PhotoArr } from "../../pages/photos/types";

function* workerSaga() {
   try {
      const id: string = yield select(({ photos }) => photos.index);
      const data: PhotoArr = yield call(getPhotos, id);
      yield put(setImages(SET_PHOTOS, data));
   } catch (error) {
      const ErrorMessage = "Something went wrong";
      yield put(setError(PHOTOS_ERROR, ErrorMessage));
   }
}

function* watchSaga() {
   yield takeEvery(GET_PHOTOS, workerSaga);
}

export default function* rootSaga() {
   yield watchSaga();
}
