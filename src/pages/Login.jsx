import { Alert, Button, TextField } from "@mui/material";
import InputGroup from "../components/InputGroup";

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../contexts/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      setError("");
      navigate("/");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <>
      <h3
        style={{
          textAlign: "center",
        }}
      >
        Herzlich Willkommen bei MMM! Bitte melden Sie sich an!
      </h3>

      <div
        style={{
          width: "50%",
          marginInline: "auto",
        }}
      >
        {error && (
          <Alert severity="error" variant="outlined">
            {error}
          </Alert>
        )}
        <form onSubmit={handleSubmit}>
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            variant="standard"
            label="Email"
            id="email"
            sx={{ width: "100%", marginBlock: 1 }}
          />
          <InputGroup
            onChange={(e) => setPassword(e.target.value)}
            variant="standard"
            label="Passwort"
            id="passwort"
            type="password"
            sx={{ width: "100%", marginBlock: 1 }}
          />

          <Button
            variant="contained"
            type="submit"
            sx={{ width: "100%", marginBlock: 1 }}
          >
            Anmelden
          </Button>
        </form>
      </div>
    </>
  );
};

export default Login;
