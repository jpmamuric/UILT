import * as types from './types';

export const userReady = () => ({ type: types.USER_READY, payload: true });

export const changeColor = (color, colorChosen) => ({ type: types.CHANGE_COLOR, payload: color, colorChosen });

export const addParts = partName => ({ type: types.ADD_PARTS, partName, payload: true });
export const removeParts = partName => ({ type: types.ADD_PARTS, partName, payload: false });

export const getAccessories =  accessories => ({ type: types.ADD_ACCESSORIES, payload: accessories });
export const addAccessory =  accessory => ({ type: types.ADD_ACCESSORIES, payload: accessory });
export const removeAccessory =  id => ({ type: types.REMOVE_ACCESSORIES, payload: id });
