import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Weather from './src/components/Weather';
import StudentList from './src/components/StudentList';
import StudentDetail from './src/components/StudentDetail';
import News from './src/components/News';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="nav">
          <ul className="nav-list">
            <li><Link to="/weather">Thời tiết</Link></li>
            <li><Link to="/students">Sinh viên</Link></li>
            <li><Link to="/news">Tin tức</Link></li>
          </ul>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Weather />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/students" element={<StudentList />} />
            <Route path="/student/:id" element={<StudentDetail />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
