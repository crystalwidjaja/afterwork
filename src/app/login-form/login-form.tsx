import { Formik, Field, Form, FormikHelpers } from 'formik';
import './login-form.css';
import { FormEvent } from 'react'
import Link from 'next/link';

interface Values {
  username: string;
  password: string;
}

export default function LoginForm() {

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    console.log(formData)
    // const response = await fetch('/api/submit', {
    //   method: 'POST',
    //   body: formData,
    // })

    // // Handle response if necessary
    // const data = await response.json()
    // // ...
  }

  return (
    <div>
      <hr></hr>
      <h1 className='welcome'>Welcome Back!</h1>
      <div className='google-login' >
        <img className='google-logo' src='google-logo.png' alt="google-logo" width={50} height={50} />
        <button type="button" className="google-sign-in-button" >Login with Google</button>
      </div>

      <div id='or-block'>
        <img className='bar' src='login-form-bar.png' alt="login-bar" />
        <div className='or'> or </div>
        <img className='bar' src='login-form-bar.png' alt="login-bar" />
      </div>

      <form className='form-input'>
        <input type="text" id='email' name="Email" placeholder="Email" />
        <input type="text" id='password' name="password" placeholder="Password" />
      </form>

      <form className='form-submit'>
        <button type="submit">Forgot Password?</button>
        <button className='login-button' type="submit">Login</button>
      </form>

      <div id='create-account'>
        <div className='no-account'>Don't have an account?</div>
        <Link className='create-here' href="http://localhost:3000/login-form">Create one here!</Link>
      </div>

    </div>
  );
};