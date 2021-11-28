import "./styles.css";

import { Routes ,Route } from 'react-router-dom';
import { UserPage, MainPage } from "./pages";

export default function App() {
  return (
    <Routes>
      <Route exact path="/user/:userId" element={<UserPage />} />

      <Route
        path="*"
        element={<MainPage />}
      />
    </Routes>
  );
}
