import React, { useEffect, useState } from 'react';
import Confetti from "react-confetti";

function Header() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 5000); // Change the timeout value to a more reasonable duration
  }, []);

  return (
    <div>
      {show && <Confetti numberOfPieces={300} spread={360} height={window.innerHeight} />}
    </div>
  );
}

export default Header