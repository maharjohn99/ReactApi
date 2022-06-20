import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecipeApp from "./components/RecipeApp";
import UserDetails from "./components/Profile";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RecipeApp />} />
        <Route path="/userprofile" element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
