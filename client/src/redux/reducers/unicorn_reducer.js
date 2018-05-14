import * as types from '../actions/types'

const initialState = {
  readyToBuild: false,
  color: 'white',
  colorChosen: false,
  accessories: [],
  parts: {},
  totalPrice: 0,
};

export default ( state = initialState, action ) => {
  switch (action.type) {
    case types.USER_READY:
      return { ...state, readyToBuild: action.payload || false };

    case types.CHANGE_COLOR:
      return { ...state, color: action.payload , colorChosen: action.colorChosen };

    case types.ADD_PARTS:
      return {
        ...state,
        parts: {
          ...state.parts,
          [action.partName]: action.payload
        }
      };

    case types.REMOVE_PARTS:
      return {
        ...state,
        parts: {
          ...state.parts,
          [action.partName]: action.payload
        }
      };

    case types.ADD_ACCESSORIES:
      const accessoryExists = (obj, list) => {
        for (let i = 0; i < list.length; i++) {
            if (list[i].id === obj.id) {
                return true;
            }
        }

        return false;
      }

      //check if it exists
      if(accessoryExists(action.payload, state.accessories)) {
        return state;
      }

      return {
        ...state,
        accessories: [...state.accessories, action.payload]
      };

    case types.REMOVE_ACCESSORIES:

      const updatedAccessories = state.accessories.filter(result => result.id !== action.payload)
      return {
        ...state,
        accessories: updatedAccessories
      };



    default:
      return state;
  }
}
