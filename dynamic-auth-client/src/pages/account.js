import React from "react"
import { Router } from "@reach/router"
import { login, logout, isAuthenticated, getProfile, getIdToken } from "../utils/auth"
import { Link } from "gatsby"
import Articles from "../components/Articles";

const Home = () => <p>Home</p>
const MyAccount = ({user}) => <div>My Account - <pre>{JSON.stringify(user, null, 2)}</pre></div>

const Account = () => {
  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }

  const user = getProfile()
  const idToken = getIdToken()
  console.log(idToken);

  return (
    <>
      <nav>
        <Link to="/">Home</Link>{" "}
        <Link to="/account/">My Account</Link>{" "}
        <Link to="/account/articles">My Articles</Link>{" "}
        <a
          href="#logout"
          onClick={e => {
            logout()
            e.preventDefault()
          }}
        >
          Log Out
        </a>
      </nav>
      <Router>
        <Home path="/" />
        <MyAccount path="/account/" user={user} />
        <Articles path="/account/articles" token={idToken} />
      </Router>
    </>
  )
}

export default Account
