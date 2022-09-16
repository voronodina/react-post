import React from "react";
import "../../staail/Myinput.css"
const Myinput = React.forwardRef((props, ref)=> {
    return(
        <input ref={ref} className="Myinput" {...props} />
    );
}) ;

export default Myinput;