import React, { Children } from 'react'
import chart from "../../assets/images/chart.png"
import {LuTrendingUpDown} from"react-icons/lu";

const AuthLayout = ({children}) => {
  return (
    <div className='flex'>
        <div className='w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12'>
            <h2 className='text-lg font-medium text-black'>Expense Tacker</h2>
            {children}
        </div>

        <div className='hidden md:block w-[40vw] h-screen bg-violet-50 bg-auth-bg-img bg-cover bg-no-repeat bg-center overflow-hidden p-8 relative'>
             
            <div className='w-38 h-38 rounded-[30px] bg-purple-400 absolute top-6 left-5'/>
            
            <div className='w-38 h-46 rounded-[30px] border-[20px] border-fuchsia-300 absolute top-[20%] right-[10px] '/>
            <div className='w-38 h-38 rounded-[30px] bg-violet-400 absolute bottom-0 left-5'/>
             
             <div className='grid grid-cols-1 z-20'>
                <StatsInfoCard
                icon={<LuTrendingUpDown/>}
                label="Track Your Income & Expenses"
                value="430,000"
                color="bg-primary"
                />
             </div>


           <img src={chart} className='w-64 lg:w-[65%]  absolute bottom-7 top-50 left-[100px] shadow-lg shadow-blue-400/15'/>
        </div>


    </div>
  )
}

export default AuthLayout

const StatsInfoCard =({icon, label,value,color}) =>{
    return(
    <div className='flex gap-6 bg-white p-2 rounded-xl shadow-md shadow-purple-400/10 border border-gray-200/50 z-10'>
        <div className={`w-12 h-12 flex items-center justify-center text-[26px] text-white ${color} rounded-full drop-shadow-xl`}>
            {icon}
        </div>
        <div>
            <h6 className=' text-xs text-gray-500 mb-1'>{label}</h6>
            <span className='text-[20px]'>${value}</span>
        </div>
    </div>
    );
}