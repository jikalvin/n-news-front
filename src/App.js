import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from "./firebase";
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import News from './Components/News/News';
import CreateNews from './Components/AdminPanel/CreateNews';
import EditNews from './Components/AdminPanel/EditNews';
import LoadingBar from 'react-top-loading-bar';
import Footer from './Footer/Footer';

function App() {
  const [progress, setProgress] = useState(0);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      setProgress(30);
      try {
        const newsRef = collection(db, 'news');
        const querySnapshot = await getDocs(newsRef);
        const fetchedArticles = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setArticles(fetchedArticles);
        setProgress(100);
      } catch (err) {
        console.error('Error fetching articles:', err);
        setProgress(100);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const categorizeArticles = (category) => articles.filter(article => article.category.toLowerCase() === category.toLowerCase());

  return (
    <div>
      <Router>
        <LoadingBar height={3} color='#f11946' progress={progress} />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home setProgress={setProgress} articles={articles} loading={loading} />} />
          <Route exact path="/admin/create" element={<CreateNews />} />
          <Route exact path="/admin/edit/:id" element={<EditNews />} />
          <Route exact path="/business" element={<News setProgress={setProgress} articles={categorizeArticles('business')} loading={loading} category="business" />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} articles={categorizeArticles('entertainment')} loading={loading} category="entertainment" />} />
          <Route exact path="/general" element={<News setProgress={setProgress} articles={categorizeArticles('general')} loading={loading} category="general" />} />
          <Route exact path="/health" element={<News setProgress={setProgress} articles={categorizeArticles('health')} loading={loading} category="health" />} />
          <Route exact path="/science" element={<News setProgress={setProgress} articles={categorizeArticles('science')} loading={loading} category="science" />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} articles={categorizeArticles('sports')} loading={loading} category="sports" />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} articles={categorizeArticles('technology')} loading={loading} category="technology" />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
