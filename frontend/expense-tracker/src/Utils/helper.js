export const validateEmail=(email)=>{
    const regex =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};



export const getInitials = (name) =>{
    if(!name) return"";

    const words = name.split("");
    let initials = "";

    for(let i=0; i<Math.min(words.length, 2); i++) {
        initials += words[i][0];
    }
    return initials.toUpperCase();
};

export const addThousandsSeparator = (num) => {
    if(num == null || isNaN(num)) return"";

    const [integerPart,fractionalPart]= num.toString().split(".");
    const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g,",");

    return fractionalPart
    ?`${formattedInteger}.${fractionalPart}`
    :formattedInteger;
};



export const prepareExpenseBarChartData = (data =[]) => {
    const chartData =data.map((item) => ({
        category: item?.category,
        amount: item?.amount,
    }));
    return chartData;
};

import moment from 'moment';
import { data } from 'react-router-dom';

export const prepareIncomeBarChartData = (data =[]) =>{
    const sortedData = [...data].sort((a,b) => new Date(a.Date)-new Date(b.Date));

   const chartData = sortedData.map((item, index) => ({
    category: `${moment(item.date).format('Do MMM')} (${index + 1})`,
    amount: item.amount,
    source: item.source,
  }));


    return chartData;
};

export const prepareExpenseLineChartData = (data = []) => {
  const sortedData = [...data].sort((a, b) => new Date(a.date) - new Date(b.date));

  const chartData = sortedData.map((item, index) => ({
    month: `${moment(item.date).format('Do MMM')} (${index + 1})`, //  added index number
    amount: item.amount,
    category: item.category,
  }));

  return chartData;
};
