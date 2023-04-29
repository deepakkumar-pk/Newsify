import Navbar from "./component/Navbar";
import News from "./component/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<News key="home" />} />
        <Route
          path="/general"
          element={<News key="general" category="general" />}
        />
        <Route
          path="/business"
          element={<News key="business" category="business" />}
        />
        <Route
          path="/entertainment"
          element={<News key="entertainment" category="entertainment" />}
        />
        <Route
          path="/health"
          element={<News key="health" category="health" />}
        />
        <Route
          path="/science"
          element={<News key="science" category="science" />}
        />
        <Route
          path="/sports"
          element={<News key="sports" category="sports" />}
        />
        <Route
          path="/technology"
          element={<News key="technology" category="technology" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
