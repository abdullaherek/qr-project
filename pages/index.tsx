import type { NextPage } from 'next'
import HomePage from '../components/HomePage/HomePage';
import Layout from '../components/Layout/Layout'
import firebase from "../firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";
import Auth from "../components/Auth/Auth";
const Home: NextPage = () => {

  const [user, loading, error] = useAuthState(firebase.auth());

  return (
    <div >
      <Layout />
      <HomePage />

      {!user && <Auth/>}
      {user && (
        <>
          <h1> Hello Apo</h1>
        </>
      )}
    </div>
  )
}

export default Home;
