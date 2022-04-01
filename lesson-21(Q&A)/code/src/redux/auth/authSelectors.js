export const getIsAuth = (state) => Boolean(state.auth.idToken);
export const getLocalid = (state) => state.auth.user.localId;
