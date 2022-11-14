import { actionTypes } from "../actions/notify.action";

const initialState = {
    open: true,
    horizontal: 'center',
    vertical: 'top',
    class: 'error',
    time: 3000,
    msg: 'Dados atualizados'
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case actionTypes.CHANGE:
    return { ...state, ...payload }

  default:
    return state
  }
}
