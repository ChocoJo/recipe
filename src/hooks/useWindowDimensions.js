import { useState, useEffect } from "react";

const getWindowDimensions = () => {
    const { innerWidth: width, innerHeigth: heigth } = window;
    return { width, heigth }
}

export const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    const handleResize = () => { setWindowDimensions(getWindowDimensions());
    }
    
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
        
        }, []);
        return windowDimensions;
    }
