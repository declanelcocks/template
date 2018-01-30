export const initialState = {
  user: null,
  authenticated: false,
}

export const selectUser = (state = initialState) => state.user
export const selectAuthenticated = (state = initialState) => state.authenticated
