import { Route, Routes } from "react-router-dom";
import { UserScreen } from "./features";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UserScreen />} />
      </Routes>
    </div>
  );
}

export default App;
