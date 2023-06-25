import React from 'react'

function OrderForm({setOrder}) {
const handleClick = (e)=>{
    
    if (e.target.classList.contains("modal")){
        setOrder(false)
    }
}
  return (
    <div onClick={handleClick} className='bg-gray-900/40 modal justify-center items-center w-full h-full top-0 left-0 absolute flex '>
        <form action="" className='bg-gray-200 rounded p-4 w-1/3 h-3/4 flex flex-col justify-around items-center'>
            
            <div className='font-bold text-xl'>Add new order</div>
            <div className='flex flex-col items-center'>
                <label htmlFor="syringe">Syringes</label>
                <div className='flex gap-4'>
                    <span className='bg-gray-400 rounded w-8 flex justify-center items-center cursor-pointer '>-</span>
                <input type="number" className='rounded p-2' />
                <span className='bg-gray-400 rounded w-8 flex justify-center items-center  cursor-pointer'>+</span>
                </div>
            </div>
           <div className='flex flex-col items-center'>
                <label htmlFor="syringe">Bandages</label>
                <div className='flex gap-4'>
                    <span className='bg-gray-400 rounded w-8 flex justify-center items-center cursor-pointer '>-</span>
                <input type="number" className='rounded p-2' />
                <span className='bg-gray-400 rounded w-8 flex justify-center items-center  cursor-pointer'>+</span>
                </div>
            </div>
           <div className='flex flex-col items-center'>
                <label htmlFor="syringe">Drop</label>
                <div className='flex gap-4'>
                    <span className='bg-gray-400 rounded w-8 flex justify-center items-center cursor-pointer '>-</span>
                <input type="number" className='rounded p-2' />
                <span className='bg-gray-400 rounded w-8 flex justify-center items-center  cursor-pointer'>+</span>
                </div>
            </div>
           <div className='flex flex-col items-center'>
                <label htmlFor="syringe">Scissors</label>
                <div className='flex gap-4'>
                    <span className='bg-gray-400 rounded w-8 flex justify-center items-center cursor-pointer '>-</span>
                <input type="number" className='rounded p-2' />
                <span className='bg-gray-400 rounded w-8 flex justify-center items-center  cursor-pointer'>+</span>
                </div>
            </div>
           <div className='flex flex-col items-center'>
                <label htmlFor="syringe">Gauze</label>
                <div className='flex gap-4'>
                    <span className='bg-gray-400 rounded w-8 flex justify-center items-center cursor-pointer '>-</span>
                <input type="number" className='rounded p-2' />
                <span className='bg-gray-400 rounded w-8 flex justify-center items-center  cursor-pointer'>+</span>
                </div>
            </div>
           <div className='flex flex-col items-center'>
                <label htmlFor="syringe">Liquid Suppliments</label>
                <div className='flex gap-4'>
                    <span className='bg-gray-400 rounded w-8 flex justify-center items-center cursor-pointer '>-</span>
                <input type="number" className='rounded p-2' />
                <span className='bg-gray-400 rounded w-8 flex justify-center items-center  cursor-pointer'>+</span>
                </div>
            </div>
            <div className='flex gap-3 items-center'>
                <label htmlFor="">Choose the target</label>
                <select name="" id="" className='bg-gray-400 p-2 rounded'>
                <option value="md1">Dr Anorld</option>
                <option value="md1">Dr Peach</option>
                <option value="md1">Dr Rachel</option>
                <option value="md1">Dr Julius</option>
                <option value="md1">Dr Reece</option>
                <option value="md1">Dr Karius</option>
            </select>
            </div>
            <button className='bg-blue-300 m-3 p-3 rounded'>Add Order</button>
        </form>
    </div>
  )
}

export default OrderForm