import React, { useState } from "react";
import {BsArrowUpCircle} from 'react-icons/bs'

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    setIsVisible(scrollTop > 0);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {isVisible && (
        <button className="scroll-to-top-btn" style={{border:'none', position:'absolute', right:0}} onClick={scrollToTop}>
         <BsArrowUpCircle color="orange" size={30}/>
        </button>
      )}
    </>
  );
}

export default ScrollToTopButton;