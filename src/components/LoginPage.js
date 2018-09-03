import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../actions/auth'

export const LoginPage = ({ startLogin }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Boilerplate React App</h1>
            <p>Tagline for App</p>
            <button className="button" onClick={() => startLogin('google')}>Login with Google</button>            
        </div>        
    </div>
    
)

const mapDispatchToProps = (dispatch) => ({
    startLogin: (authProvider) => dispatch(startLogin(authProvider))
})

export default connect(undefined, mapDispatchToProps)(LoginPage)