import { Route, Routes } from "react-router-dom";
import SongList from "./pages/SongList";
import Login from "./pages/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthContextProvider } from "./contexts/AuthContext";
import AccountHeader from "./components/AccountHeader";

import { ThemeProvider } from "@mui/material";
import { MUItheme } from "./mui-theme";

export default function App() {
  return (
    <div className="mainLayout">
      <AuthContextProvider>
        <ThemeProvider theme={MUItheme}>
          <Header />

          <Routes>
            <Route path="/login" element={<Login />} />
            {/* <Route path="/signup" element={<Signup />} /> */}
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <AccountHeader />
                  <SongList />
                </ProtectedRoute>
              }
            />
          </Routes>

          <Footer />
        </ThemeProvider>
      </AuthContextProvider>
    </div>
  );
}
