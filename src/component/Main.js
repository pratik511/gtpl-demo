import React from 'react'
import { Fivepage } from './pages/Fivepage'
import Fourpage from './pages/Fourpage'
import { HomePage } from './pages/HomePage'
import { SecondPage } from './pages/SecondPage'
import { ThreadPage } from './pages/ThreadPage'


function Main() {
    return (
        <>
            <div>
                {/* <HomePage /> */}
                {/* <SecondPage /> */}
                {/* <ThreadPage /> */}
                <Fourpage />
                {/* <Fivepage /> */}
            </div>
        </>
    )
}

export default Main