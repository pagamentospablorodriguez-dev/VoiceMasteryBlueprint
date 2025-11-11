import { useState, useEffect } from 'react';
import LandingPage from './LandingPage';
import CoursePage from './pages/CoursePage';

function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'course'>('landing');

  useEffect(() => {
    // Check the current URL path
    const path = window.location.pathname;
    
    // If the path is /course, show the course page
    if (path === '/course' || path.startsWith('/course/')) {
      setCurrentPage('course');
    } else {
      setCurrentPage('landing');
    }
  }, []);

  return (
    <>
      {currentPage === 'landing' ? (
        <LandingPage />
      ) : (
        <CoursePage />
      )}
    </>
  );
}

export default App;
