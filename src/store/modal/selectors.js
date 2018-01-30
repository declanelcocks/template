// https://github.com/diegohaz/arc/wiki/Selectors
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#modal
export const initialState = {}

export const selectModalOpen = (state = initialState, name) => !!state[name]
