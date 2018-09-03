import authReducer from '../../reducers/auth'

test('should set uid for logged in', () => {
    const uid = '234289f79adshajgla'
    const action = {
        type: 'LOGIN',
        uid
    }
    const state = authReducer({}, action)
    expect(state).toEqual({ uid: action.uid})
})

test('should clear uid for logout', () => {
    const uid = '234289f79adshajgla'
    const action = {
        type: 'LOGOUT'
    }
    const state = authReducer({ uid }, action)
    expect(state).toEqual({})

})