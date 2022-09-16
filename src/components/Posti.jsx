import React from "react";
import Counter from "./Counter"
import "./staail/postItems.css";
import Mybutton from "./UI/button/mybutton";

const Posti = (props) => {
    return (
        <div>
            <div className="post">
                <div className="hed a ">
                    <strong>{props.post.id}. {props.post.title}</strong>
                </div>
                <div className="content b ">
                    {props.post.body}
                </div>
                <div className="futer c ">
                    <Mybutton onClick={() => props.remove(props.post)} >Видалити</Mybutton>
                    <Counter/>
                </div>
            </div>
        </div>
    );
};
export default Posti;