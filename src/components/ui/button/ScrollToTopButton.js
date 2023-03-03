import React, { useEffect, useState } from "react";
import {BsArrowUpCircle} from 'react-icons/bs'

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

//   const handleScroll = () => {
//     const scrollTop = window.pageYOffset;
//     setIsVisible(scrollTop > 0);
//   };

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   React.useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

useEffect(() => {
    const handleScrollButtonVisibility = () => {
        window.pageYOffset > 300 ? setIsVisible(true) : setIsVisible(false);
    }
        window.addEventListener('scroll', handleScrollButtonVisibility);
        return () => {
            window.removeEventListener('scroll', handleScrollButtonVisibility)
        }
    
}, [])
const handleScrollToTop = () => {
    window.scrollTo({top:0, behavior:"smooth"})
}
  return (
    <>
      {isVisible && (
        <button className="scroll-to-top-btn" style={styles} onClick={handleScrollToTop}>
         <BsArrowUpCircle color="orange" size={30}/>
        </button>
      )}
    </>
  );
}

export const styles = {
    border:'none',
    background:'transparent', 
    position:'fixed',
    right:0,
    bottom:10
}


export default ScrollToTopButton;