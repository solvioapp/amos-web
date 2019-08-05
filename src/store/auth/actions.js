export const AUTHORIZE = `SETTINGS/AUTHORIZE`
export const LOGOUT = `SETTINGS/LOGOUT`
export const SET_ERRORS = `SETTINGS/SET_ERRORS`
export const SET_IS_AUTH = `SETTINGS/SET_IS_AUTH`

export const authorize = ({email, password}) => ({
  type: AUTHORIZE,
  email, password
})

export const logout = () => ({
  type: LOGOUT
})

export const setIsAuth = value => ({
  type: SET_IS_AUTH,
  value
})

export const setErrors = value => ({
  type: SET_ERRORS,
  value
})
