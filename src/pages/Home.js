import React, { useRef, useState } from "react"
import Nav from "../components/navBar/Nav"
import Bio from "../components/Bio/Bio"
import WhatIdo from "../components/whatIDo/WhatIdo"
import Work from "../components/myWork/Work"
import Contact from "../components/contact/Contact"
const Home = () => {
    const [visible, setVisible] = useState(false)
    const sectionsRef = useRef({});

    const handleScroll = (sectionId) => {
      const sectionElement = sectionsRef.current[sectionId];
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);
    return (
        <div>
            <Nav handleScroll={handleScroll}/>
            <Bio sectionsRef={sectionsRef}/>
            <WhatIdo sectionsRef={sectionsRef}/>
            <Work sectionsRef={sectionsRef}/>
            <Contact sectionsRef={sectionsRef}/>
            <img onClick={scrollToTop} style={{ display: visible ? 'inline' : 'none', cursor: "pointer", position: "sticky", bottom: "5%", left: "91%", width: "50px" }} src="/upLight.png" />
        </div>
    )
}
export default Home