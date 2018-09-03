import { firebase, googleAuthProvider, FacebookAuthProvider } from '../firebase/firebase'

export const login = (uid) => ({
    type: 'LOGIN',
    uid
})

export const startLogin = (authProvider) => {
    console.log("AUTHING", authProvider)
    return () => {       
        switch (authProvider) {
            case 'google':                
                return firebase.auth().signInWithPopup(googleAuthProvider)
            case 'facebook':
                const provider = new firebase.auth.FacebookAuthProvider()
                return firebase.auth().signInWithPopup(provider)
        }         
    }
}

export const logout = () => ({
    type: 'LOGOUT'
})

export const startLogout = () => {
    return() => {
        return firebase.auth().signOut()
    }
}