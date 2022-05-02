import React from 'react'
import Back from '../../utils/img/back3.png'

export const SecondPage = () => {
    return (
        <>
            <div className="outside">
                <div className="container">
                    <button className='mt-0 btnHide'>
                    <i className="fa ">&#xf177;</i>
                    </button>
                    <div className='mb-3 m-5'>
                        <label className='form-label mt-5 mb-0 '>Enter Name</label>
                        <input className="form-control" type="text" placeholder="Enter Name" aria-label="default input example" />
                        <label className='form-label mt-4 mb-0'>Enter Number</label>
                        <input className="form-control" type="text" placeholder="Enter number" aria-label="default input example" />
                    </div>
                    <div className='HomeBtnMain mt-5'>
                        <button className='HomeBtn'>NEXT</button>
                    </div>
                </div>
            </div>
        </>
    )
}
