import React, { useEffect, useState, useRef } from 'react'

import Confetti from "react-confetti";
function Header() {

    const [show, setShow] = useState(true);

    useEffect(() => {

        setTimeout(() => {
            setShow(false)
        }, 100000);
    }, []);




    return (
        <div  >

            {show ? <>

                <Confetti numberOfPieces={300} spread={360} />

            </> : <></>
            }

        </div>
    )
}

export default Header