import React from "react";
import { useState } from "react";
import Myinput from "./UI/input/Myinput";
import Mybutton from "./UI/button/mybutton";
import "./staail/postforn.css"
const PostFrom = ({create}) => {
    const [post, setPost] = useState ({title: '', body: ''})
    
   
      
        console.log()
   
    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now() 
        }
        create(newPost)
        setPost({title: '', body: ''})
   }
  
   
    return (
        <div>
            <form>
                <Myinput 
                
                value={post.title}
                onChange={e=>setPost({...post, title:e.target.value})}
                tepe="text"
                placeholder="назва"
            
                />
                <Myinput 
                value={post.body}
                onChange={e=>setPost({...post, body:e.target.value})}
                tepe="text"
                placeholder="текст"
                />
                <Mybutton  onClick={addNewPost} >додати</Mybutton>
            </form>
        </div>
    );
};


export default PostFrom;