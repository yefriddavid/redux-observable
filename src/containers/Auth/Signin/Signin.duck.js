import autodux from 'autodux'


// export const SigninDuck = autodux({
export const { actions, initial, reducer } = autodux({
  slice: 'signup',
  initial: {
    username: '',
    password: '',
    loading: false,
    success: false,
    id: null,
  },
  actions: {
    sendSigninInfo: (state, { username, password }) => ({
      username,
      password,
      loading: true
    }),
    signinSuccess: (state, id) => ({
      ...initial,
      success: true,
      id
    })
  }
})

