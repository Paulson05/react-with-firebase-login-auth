import React from 'react'

 const login = (props) => {

     const {email, setEmail,  password, setPassword,handleLogin, handleSignup, hasAccount, setHasAccount, emailError,passwordError}= props;
    return (
        
        <section className="login">
            <label htmlFor="">username</label>
            <input type="text" autoFocus required value = {email} onChange = {(e) => setEmail(e.target.value)}/>
    <p>{emailError}</p>
    <label htmlFor="">passwowrd</label>
    <input type="password" required value = {password} onChange = {(e) => setPassword(e.target.value)}/>
    <p>{passwordError}</p>
    <div>
        {hasAccount ? (
            <>
            <button onClick = {handleLogin} >signin</button>
            <p>don't have an acc ? <span onClick = {() => setHasAccount(!hasAccount) } >sign up</span></p>
            </>
        ) :(
            <>
            <button onClick = {handleSignup}>signup</button>
            <p>don't have an acc ? <span onClick = {() => setHasAccount(!hasAccount) } >sign in</span></p>
            </>
         )}
    </div>
        </section>
       
    )
}
export default login;