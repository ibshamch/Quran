import Homepage from "./Components/Homepage/Homepage";
import ReadQuran from "./Components/ReadQuran/ReadQuran";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="app ">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/readQuran" element={<ReadQuran />} />
      </Routes>
    </div>
  );
}

export default App;
