import React, { useState } from 'react'
import AuthLayout from '../components/Layouts/AuthLayout';
import FormSignUp from '../components/Fragments/FormSignUp';
import { registerService } from '../services/authService';
import AppSnackbar from '../components/Elements/AppSnackbar';
import { useNavigate } from 'react-router-dom';

function signUp() {
  const navigate = useNavigate();
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const handleRegister = async (values) => {
    try {
      await registerService(values.name, values.email, values.password);
      setSnackbar({
        open: true,
        message: "Registrasi Berhasil!",
        severity: "success",
      });
      // Redirect ke login setelah delay singkat atau sesuai kebutuhan
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      setSnackbar({
        open: true,
        message: err.msg || "Registrasi Gagal",
        severity: "error",
      });
    }
  };

  return (
    <AuthLayout>
      <FormSignUp onSubmit={handleRegister} />

      <AppSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={handleCloseSnackbar}
      />
    </AuthLayout>
  );
}

export default signUp;