import React, { useState } from 'react'

const ToggleButton = ({ toggler }) => {
    const [ toggleImage, setToggleImage ] = useState(true)
    function toggleTheme(){
        setToggleImage(prevImage => !prevImage)
    }

    const ThemeContext = React.createContext()
    return (
        <div>
            
        </div>
    )
}

export default ToggleButton
