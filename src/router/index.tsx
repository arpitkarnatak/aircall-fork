import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import CallDetails from "../pages/CallDetails";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/call/:call_id" element={<CallDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
