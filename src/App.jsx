import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}