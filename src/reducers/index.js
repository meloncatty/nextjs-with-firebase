import * as constants from '../constants'

const initialState = {
  food: []
}

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case constants.GETFOODSUCCESS:
      return {
        food: [
          ...action.food
        ]
      }
    case constants.GETFOODFAILURE:
      return {
        error: action.error
      }
    default:
      return state
  }
}
