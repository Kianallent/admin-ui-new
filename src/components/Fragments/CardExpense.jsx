import React from "react";
import Card from "../Elements/Card";
import Icon from "../Elements/Icon";
import CircularProgress from '@mui/material/CircularProgress';

function CardExpense(props) {
    const { data } = props;

    // Helper to render correct icon based on category
    const renderIcon = (category) => {
        switch (category) {
            case "Housing": return <Icon.House />;
            case "Food": return <Icon.Food />;
            case "Transportation": return <Icon.Transport />;
            case "Entertainment": return <Icon.Gamepad />;
            case "Shopping": return <Icon.Shopping />;
            default: return <Icon.Other />;
        }
    };

    // Helper for trend color and icon based on image reference
    const getTrend = (category) => {
        const upCategories = ["Housing", "Shopping", "Others"];
        if (upCategories.includes(category)) {
            return { color: "text-special-red", icon: <Icon.ArrowUp size={14} /> };
        }
        return { color: "text-special-green", icon: <Icon.ArrowDown size={14} /> };
    };

    const expenseContent = data && Object.keys(data).length > 0 && (
        <div className="h-full">
            {/* Header: Icon, Category, Amount, Percentage */}
            <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                    <div className="bg-gray-05 text-gray-02 p-3 rounded-lg flex items-center justify-center">
                        {renderIcon(data.category)}
                    </div>
                    <div className="ms-4">
                        <div className="text-gray-02 text-sm">{data.category}</div>
                        <div className="font-bold text-xl">${data.amount}</div>
                    </div>
                </div>
                <div className="text-right">
                    <div className="flex items-center justify-end text-sm">
                        <span className="text-gray-02 mr-1">{data.percentage || 0}%</span>
                        <span className={getTrend(data.category).color}>
                            {getTrend(data.category).icon}
                        </span>
                    </div>
                    <div className="text-[10px] text-gray-03 whitespace-nowrap">Compare to the last month</div>
                </div>
            </div>

            {/* Transaction Items */}
            <div className="space-y-4">
                {data.items && data.items.map((item, index) => (
                    <div key={index}>
                         <div className="flex justify-between items-start">
                            <div className="font-bold text-sm text-gray-01">{item.name}</div>
                            <div className="text-right">
                                <div className="font-bold text-sm text-gray-01">${item.amount}</div>
                                <div className="text-xs text-gray-03 mt-1">{item.date}</div>
                            </div>
                        </div>
                        {index !== data.items.length - 1 && (
                             <div className="border-b border-gray-05 mt-4"></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <Card
            title=""
            desc={
                !data || Object.keys(data).length === 0 ? (
                    <div className="flex flex-col justify-center items-center h-[200px] text-primary">
                        <CircularProgress color="inherit" size={50} enableTrackSlot />
                        Loading Data
                    </div>
                ) : (
                    expenseContent
                )
            }
        />
    );
}

export default CardExpense;
