import React, { useContext, useEffect, useState } from "react";
import MainLayout from "../components/Layouts/MainLayout";
import CardExpense from "../components/Fragments/CardExpense";
import { expenses as expensesDataLocal } from "../data"; 
import { expensesService } from "../services/dataService";
import { AuthContext } from "../context/authContext";
import AppSnackbar from "../components/Elements/AppSnackbar";
import CircularProgress from '@mui/material/CircularProgress';

function Expense() {
    const [expenses, setExpenses] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { logout } = useContext(AuthContext);

    const [snackbar, setSnackbar] = useState({
        open: false,
        message: "",
        severity: "success",
    });

    const handleCloseSnackbar = () => {
        setSnackbar((prev) => ({ ...prev, open: false }));
    }

    const fetchExpenses = async () => {
        setIsLoading(true);
        try {
            const data = await expensesService();
            if (data && data.length > 0) {
                setExpenses(data);
            } else {
                setExpenses(expensesDataLocal); 
            }
        } catch (err) {
            console.error("Gagal mengambil data dari API, menggunakan data lokal.");
            setExpenses(expensesDataLocal);
            if (err.status === 401) {
                logout();
            }
        } finally {
            // Simulasi delay singkat agar loader terlihat
            setTimeout(() => {
                setIsLoading(false);
            }, 800);
        }
    };

    useEffect(() => {
        fetchExpenses();
    }, []);

    return (
        <MainLayout>
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-02">Expenses Comparison</h1>
            </div>

            {isLoading ? (
                <div className="flex flex-col justify-center items-center h-[50vh] text-primary">
                    <CircularProgress color="inherit" size={50} />
                    Loading Data
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {expenses.map((item) => (
                        <CardExpense key={item.id} data={item} />
                    ))}
                </div>
            )}

            <AppSnackbar
                open={snackbar.open}
                message={snackbar.message}
                severity={snackbar.severity}
                onClose={handleCloseSnackbar}
            />
        </MainLayout>
    );
}

export default Expense;
