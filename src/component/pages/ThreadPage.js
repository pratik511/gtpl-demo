import React from 'react'

export const ThreadPage = () => {
    return (
        <>
            <div className="outside">
                <div className="container">
                    <button className='mt-0 btnHide'>
                        <i className="fa ">&#xf177;</i>
                    </button>
                    <div className='mb-0 m-3'>
                        <label className='form-label mt-3 mb-0 font'>Packege_Type</label>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Select Type</option>
                            <option value="1">SD</option>
                            <option value="2">HD</option>
                            <option value="3">Normal</option>
                            <option value="3">HD+</option>
                            <option value="3">UHD</option>
                        </select>
                    </div>
                    <div className='mb-3 m-5'>
                        <label className='form-label mt-3 mb-0 font'><li>SD - Standara Definition/720.</li></label><br />
                        <label className='form-label mt-3 mb-0 font'><li>HD - High Definition/2k.</li></label><br />
                        <label className='form-label mt-3 mb-0 font'><li>Normal - Normal Resolution</li></label><br />
                        <label className='form-label mt-3 mb-0 font'><li>HD+ - High Definition/4k.</li></label><br />
                        <label className='form-label mt-3 mb-0 font'><li>UHD - Ultra High Definition/8k.</li></label>
                    </div>
                    <div className='HomeBtnMain mt-4'>
                        <button className='HomeBtn'>NEXT</button>
                    </div>
                </div>
            </div>
        </>
    )
}
