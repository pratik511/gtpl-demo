import React from 'react'

export default function Fourpage() {
    return (
        <>
            <div className="outside">
                <div className="container">
                    <button className='mt-0 btnHide'>
                        <i className="fa ">&#xf177;</i>
                    </button>
                    <div className='mb-0 m-3'>
                        <label className="form-label mb-0 font">Start Date</label>
                        <br/>
                        <input type="date" id="" name=""  style={{width:"324px",height:"40px"}}/>
                    </div>
                    <div className='mb-0 m-3'>
                        <label className='form-label mt-2 mb-0 font'>Packege_Type</label>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Select Plane</option>
                            <option value="1">1-Month</option>
                            <option value="2">3-Month</option>
                            <option value="3">6-Month</option>
                            <option value="3">1-Year</option>
                        </select>
                    </div>
                    <div className='d-flex m-4 mt-2'>
                        <div className='mb-3 mt-5'>
                            <label className='form-label mx-4 mb-0 font'>Name</label><br />
                            <label className='form-label mx-4 mb-0 font'>Packege_Type</label><br />
                            <label className='form-label mx-4 mb-0 font'>Start_Date</label><br />
                            <label className='form-label mx-4 mb-0 font'>Packege_Plane</label><br />
                            <label className='form-label mx-4 mb-0 font'>Price</label><br />
                        </div>
                        <div className='mb-3 mt-5'>
                            <label className='form-label mx-4 mb-0 font'>Name</label><br />
                            <label className='form-label mx-4 mb-0 font'>Packege_Type</label><br />
                            <label className='form-label mx-4 mb-0 font'>Start_Date</label><br />
                            <label className='form-label mx-4 mb-0 font'>Packege_Plane</label><br />
                            <label className='form-label mx-4 mb-0 font'>Price</label><br />
                        </div>
                    </div>
                    <div className='HomeBtnMain mt-2'>
                        <button className='HomeBtn'>NEXT</button>
                    </div>
                </div>
            </div>
        </>
    )
}
