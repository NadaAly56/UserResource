import { createAction, props } from "@ngrx/store";

export const uploadImage = createAction("[Image Upload] Upload Image",
  props<{file: File}>());
