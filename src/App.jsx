import { Counter } from "store/slices/counter/Counter";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Counter />} />
      </Routes>
    </div>
  );
};

export default App;
