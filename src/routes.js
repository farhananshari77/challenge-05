import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FindCar from "./pages/FindCar";
import DetailCar from "./pages/DetailCar";
import App from "./App";

const RouteApp = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/find-car" element={<FindCar />} />
        <Route path="/find-car/detail/:idCar" element={<DetailCar />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />     
      </Routes>
    </Router>
    </>
  );
}

export default RouteApp;
