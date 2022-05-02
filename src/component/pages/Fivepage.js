import React from 'react'
import N from '../../utils/img/n.png'

export const Fivepage = () => {
    return (
        <>
            <div className="outside">
                <div className="container">
                    <div className="imgDiv">
                        <img className="imgSizeL" src={N} />
                    </div>
                    <h2 className="center">Thanks You</h2>
                    <div className='d-flex m-4 mt-4'>
                        <div className='mb-3 mt-5'>
                            <label className='form-label mx-4 mb-0 font'>Name</label><br />
                            <label className='form-label mx-4 mb-0 font'>Packege_Type</label><br />
                            <label className='form-label mx-4 mb-0 font'>Start_Date</label><br />
                            <label className='form-label mx-4 mb-0 font'>Packege_Plane</label><br />
                            <label className='form-label mx-4 mb-0 font'>Price</label><br />
                            <label className='form-label mx-4 mb-0 font'>Status</label><br />
                        </div>
                        <div className='mb-3 mt-5'>
                            <label className='form-label mx-4 mb-0 font'>Name</label><br />
                            <label className='form-label mx-4 mb-0 font'>Packege_Type</label><br />
                            <label className='form-label mx-4 mb-0 font'>Start_Date</label><br />
                            <label className='form-label mx-4 mb-0 font'>Packege_Plane</label><br />
                            <label className='form-label mx-4 mb-0 font'>Price</label><br />
                            <label className='form-label mx-4 mb-0 font'>Status</label><br />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
