import { SET_WEATHER } from "../actions"
import { initialState } from "../store"

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WEATHER:
      return {
        ...state,
        main: {
          ...state.main,
          weather: action.payload,
        },
      }
    default:
      return state
  }
}
