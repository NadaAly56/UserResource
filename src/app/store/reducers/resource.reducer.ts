import {createReducer, on} from "@ngrx/store"
import { uploadImage } from "../actions/resource.action"
export interface State {
  imgName: string | null,
}
export const initialState: State = {
  imgName: "",
}
export const resourceReducer = createReducer(initialState,
  on(uploadImage, (state, {file}) => ({
    ...state, imageUrl: URL.createObjectURL(file),
  }))
)
