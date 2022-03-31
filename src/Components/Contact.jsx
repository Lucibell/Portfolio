// // const SERVICE_ID = process.env.SERVICE_ID;
// // const TEMPLATE_ID = process.env.TEMPLATE_ID;
// // const USER_ID = process.env.USER_ID;

// // const {  SERVICE_ID, TEMPLATE_ID, USER_ID} = process.env

import React, { useRef, useState} from "react";
import emailjs from '@emailjs/browser';
import styled from "styled-components";
import fondo from '../assets/fondis2.jpg'
import { FormattedMessage } from "react-intl";
import gmail from '../assets/gmail.png'
import github from '../assets/github2.png'
import linkedin from '../assets/linkedin.png'
import wapp from '../assets/whatsapp.png'



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
        if( input.user_name && input.user_email && input.user_message){
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
          else {  alert ("Debe completar todos los campos") }
            
    }
  
    return (
        <Div >
             <Div2 className="container  text-light ">
                  <h4 style={{marginTop:"25px"}}> 
                    <FormattedMessage id= "contact.title" defaultMessage="Contactame"/></h4>
                                 
                  <form ref={form} onSubmit={sendEmail} className="row" 
                         style = {{margin: "10% 20% 20% 20%" }}>
                             <Label><FormattedMessage id= "contact.name" defaultMessage="Nombre"/></Label>
                            <input 
                              type='text' 
                              // placeholder= "Nombre" 
                              name="user_name" 
                              className="form-control" 
                              value={input.user_name} 
                              onChange={(e)=>handleInputChange(e)} 
                              style={{marginTop:"15px"}} />
                             
                            <Label>Email </Label>
                            <input 
                              type='text' 
                              name="user_email"
                              value={input.user_email} 
                              onChange={(e)=>handleInputChange(e)}  
                              className="form-control"
                              style={{marginTop:"15px"}}/>

                            <Label><FormattedMessage id= "contact.message" defaultMessage="Mensaje"/> </Label>   
                            <textarea 
                              rows="5" 
                              name="user_message"
                              value={input.user_message}
                              onChange={(e)=>handleInputChange(e)} 
                              className="form-control"
                              style={{marginTop:"15px"}}/>
                        
                        
                            <button 
                              type='submit'
                              onClick={(e) => sendEmail(e)}
                              className="form-control btn btn-primary" 
                              style={{marginTop:"30px"}}>
                                <FormattedMessage id= "contact.send" defaultMessage="Enviar"/>
                             </button>
                        </form>
                        </Div2>
                        <Div1>
                        <a href="mailto:lucibelleggia@gmail.com"><Img src={gmail} alt=""/> </a> 
                        <a href="https://github.com/Lucibell"><Img src={github} alt=""/> </a> 
                        <a href="https://www.linkedin.com/in/luciana-belleggia/"><Img src={linkedin} alt=""/> </a> 
                        <a href="https://wa.me/5493482525045"><Img src={wapp} alt=""/> </a> 
                        </Div1>
                    </Div>
            
    )

}

const Div = styled.div`
   background-image: url(${fondo});
   background-size:100%;
   position:absolute;
   top:0;
   left:0;
   right:0; 
   z-index:-3;  
   justify-items: center;
   align-items: center;
   color:white;
   font-family:"Montserrat", cursive;
   display:flex;
   
   @media screen and (max-width:840px){
     display:grid;
     grid-template-columns: repeat(1, 1fr);
     padding-bottom:70%;
     padding-left:10px;
    } 
  `

const Div2 = styled.div`
    margin-top: 60px;
    width: 50%;
    background-position: "center";
  
    @media screen and (max-width:1200px){
     width:100%; }

  `

const Label = styled.label`
    display:flex;
    margin-top:10px;
 `

const Img = styled.img`
    height:70px;
    margin-bottom:20px;
    
    @media screen and (max-width:840px){
    margin-right:10px;}
    
  `
const Div1 = styled.div `
    margin-top:125px;
    display: flex;
    flex-direction:column;
    margin-right: 200px;

    @media screen and (max-width:840px){
    display:flex;
    flex-direction:row;
    margin-top:-20px;
    margin-right: 0px;}
  `