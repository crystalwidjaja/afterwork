import LoginForm from "./login-form";
import type { NextPage } from 'next';
import Head from 'next/head';
import Navigation from "../login-form/login-navbar";

export default function LoginPage() {
  return (
    <div>
      <Navigation />
      <div>
        <title>Login Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </div>
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <LoginForm />
      </div>
    </div>
  )
}