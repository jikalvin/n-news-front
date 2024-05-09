import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import News from '../src/Components/News/News';
import AdminPanel from './Components/AdminPanel/AdminPanel';
import CreateNews from './Components/AdminPanel/CreateNews';
import EditNews from './Components/AdminPanel/EditNews';
import Login from './Components/Login/Login';
import LoadingBar from 'react-top-loading-bar';
import Footer from './Footer/Footer';
import SignUpForm from "./Components/Login/Signup";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

function App() {
  const pageSize = 15;
  const apiKey = "db82359fc09d47dda02078e9710f0167";
  const [progress, setProgress] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track authentication status
  const [user, setUser] = useState(null)

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        setUser(user)
        console.log(user)
      } else {
        console.log('User signed out');
      }
    })

  }, [auth.currentUser, isLoggedIn])

  return (
    <div>
      <Router>
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress} />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home setProgress={setProgress} />} />
          <Route exact path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route exact path="/signup" element={<SignUpForm setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/admin" element={isLoggedIn ? <AdminPanel /> : <Navigate to="/login" />} />
          <Route exact path="/admin/create" element={<CreateNews />} />
          <Route exact path="/admin/edit/:id" element={<EditNews />} />
          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business" />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />} />
          <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />} />
          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health" />} />
          <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science" />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports" />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology" />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
