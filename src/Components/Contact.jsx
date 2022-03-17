

// // const SERVICE_ID = process.env.SERVICE_ID;
// // const TEMPLATE_ID = process.env.TEMPLATE_ID;
// // const USER_ID = process.env.USER_ID;

// // const {  SERVICE_ID, TEMPLATE_ID, USER_ID} = process.env

import React, { useRef, useState} from "react";
import emailjs from '@emailjs/browser';
import styled from "styled-components";
import fondo from '../assets/fondis2.jpg'

const Div = styled.div `
   background-image: url(${fondo});
   background-size:100%;
   position:absolute;
   bottom:0;
   top:0;
   left:0;
   right:0; 
   z-index:-3;  
   justify-items: center;
   align-items: center;
   color:white;
   font-family:"Montserrat", cursive;
  `

export default function Contact() {
    const form = useRef();

    const [input, setInput] = useState({
        user_name: '',
        user_email: '',
        user_message: ''
    })

    const handleInputChange = (e) => {  
        e.preventDefault()
       setInput((input)=>{
              return {
             ...input,
             [e.target.name]: e.target.value
           }
        })
    }

    const sendEmail = (e) => {
        e.preventDefault();
        if( 
            input.user_name && 
            input.user_email && 
            input.user_message
        ){
            emailjs.sendForm( "service_u69zbjh",
                  "template_8d2jdpe", 
                  form.current,
                  "FjC-gFDf04HJQuJhZ",)
            .then((result) => {
                console.log(result.text);
                  
            }, (error) => {
                console.log(error.text);
            }
            )
            alert ("Mensaje enviado correctamente")
            setInput({
              user_name: '',
              user_email: '',
              user_message: ''
            })
         
        }
            alert ("Debe completar todos los campos")
            
    }
  
    return (
        <Div >
             <div className="container  text-light "
                  style= {{
                  marginTop: "100px",
                  width: "50%",
                  backgroundPosition: "center",
                }}
                >
                  <h1 style={{marginTop:"25px"}}>Contactame</h1>
                                 
                  <form ref={form} onSubmit={sendEmail} className="row" 
                         style = {{margin: "25px 85px 75px 100px" }}>
                            <input 
                              type='text' 
                              placeholder= "Nombre" 
                              name="user_name" 
                              className="form-control" 
                              value={input.user_name} 
                              onChange={(e)=>handleInputChange(e)} 
                              style={{marginTop:"15px"}} />

                            <input 
                              type='text' 
                              placeholder= "Email" 
                              name="user_email"
                              value={input.user_email} 
                              onChange={(e)=>handleInputChange(e)}  
                              className="form-control"
                              style={{marginTop:"15px"}}/>

                            <textarea 
                              rows="5" 
                              placeholder= "Mensaje" 
                              name="user_message"
                              value={input.user_message}
                              onChange={(e)=>handleInputChange(e)} 
                              className="form-control"
                              style={{marginTop:"15px"}}/>
                            
                            <button 
                              type='submit'
                              onClick={(e) => sendEmail(e)}
                              className="form-control btn btn-primary" 
                              style={{marginTop:"30px"}}>Enviar
                             </button>
                        </form>
                        </div>
                    </Div>
            
    )

}