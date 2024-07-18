import React from 'react'

const PayWith = () => {
  return (
    <div className=' bg-slate-200 h-[60vh] flex flex-col gap-8'>
        <div className=' mt-10 flex flex-row gap-7 justify-evenly'>
        <div className=" p-6 flex flex-col items-center gap-4 ml-6 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h2>Mpesa
                <label htmlFor="mpesa"> <input value="mpesa" id='mpesa' name='mpesa' type="radio" /></label>
               
            </h2>
            <button className=" ml-9 hover:bg-slate-600   border rounded-md font-semibold bg-blue-600 text-white text-center text-sm h-[40px] w-[200px]">PAY NOW</button>

        </div>
        <div className=" p-6 flex flex-col items-center gap-4 ml-6 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h2>Card
                <label htmlFor="mpesa"> <input value="mpesa" id='mpesa' name='mpesa' type="radio" /></label>
               
            </h2>
            <button className=" ml-9 hover:bg-slate-600   border rounded-md font-semibold bg-blue-600 text-white text-center text-sm h-[40px] w-[200px]">PAY NOW</button>

        </div>
        <div className=" p-6 flex flex-col items-center gap-4 ml-6 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h2>Paypal
                <label htmlFor="mpesa"> <input value="mpesa" id='mpesa' name='mpesa' type="radio" /></label>
               
            </h2>
            <button className=" ml-9 hover:bg-slate-600   border rounded-md font-semibold bg-blue-600 text-white text-center text-sm h-[40px] w-[200px]">PAY NOW</button>

        </div>
    </div>
    <div className='m-auto'>
        <h2 className='text-orange-700 text-[20px] font-serif font-semibold'><span>Thank You for visiting Us!!!</span></h2>
    </div>
    </div>
  )
}

export default PayWith