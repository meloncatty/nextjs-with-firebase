import * as constants from '../constants'
import { loadFirebase } from '../../../server/firebase/database'

export const getFoodSuccess = food => ({
  type: constants.GETFOODSUCCESS,
  food
})

export const getFoodFailure = error => ({
  type: constants.GETFOODFAILURE,
  error
})

export const getLoadedFirebaseStore = () => {
  return async dispatch => {
    try {
      const data = []
      const snapshot = await loadFirebase()
        .firestore()
        .collection('food')
        .get()
      snapshot.forEach(foodItem => 
        data.push({ 
          ...foodItem.data() 
        })
      )
      dispatch(getFoodSuccess(data))
    } catch (e) {
      // handle error
      dispatch(getFoodFailure(e))
    }
  }
}
