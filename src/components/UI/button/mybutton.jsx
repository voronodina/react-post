import React from "react";
import "../../staail/mybutton.css"
const Mybutton = ({children, ...props}) => {
    return (
        <div>
            <button {...props} className="mybutton">
                {children}
            </button>
        
      </div>

    
    );
};

export default Mybutton