import React, { useRef, useEffect, useState } from 'react';
import styled from "styled-components";
import Contacts from '../Contacts/Contacts';
import { useLocation } from "react-router-dom";
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { init } from 'emoji-mart'



const Chat = () => {
    const [useText, setuseText] = useState("");
    const Location = useLocation();
    const ref = useRef("");
    const textInput = useRef("");

    const [useEmojiPicker, setuseEmojiPicker] = useState(false);
    // -------------

    const changeImg = () => {
        if (textInput.current.value.trim().length >= 1) {
            const el2 = ref.current;
            el2.src = "send-message.png";
        } else {
            ref.current.src = "voice.png";
        }
    };
    const changeImg1 = (temp) => {
        if (temp == 1) {
            const el3 = ref.current;
            el3.src = "send-message.png";
        } else {
            ref.current.src = "voice.png";
        }
    };
    let temp = 0;
    const addEmoji = (e) => {

        let sym = e.unified.split("-");
        let codesArray = [];
        sym.forEach((el) => codesArray.push("0x" + el));
        let emoji = String.fromCodePoint(...codesArray);
        setuseText(useText + emoji);
        temp = 1
        changeImg1(temp)
    };
   
    const Chatboard = () => {
        
        return(
        <div >
            {/* <div className='Width4 '>
                <div className='Width2 float-left flexRow justify-content-start P-L2 align-item-center'>
                    <p className='Background chatText P-L2 P1 M1 M-L2 float-left flexRow justify-content-center align-item-center'>
                        {Location.state.name} hello </p>
                </div>
            </div> */}
            <div className='Width4'>
                <div className='Width2  P-L2 P1 M1 M-R2 float-right flexRow justify-content-end align-item-center'>
                    <p className='BackgroundChat chatText P-L2 P1 M1 M-L2 float-left flexRow justify-content-center align-item-center'>
                        {usedata}</p>
                </div>
            </div>
        </div>
    )}
    const [usedata,setusedata]=useState("")
    const sendData=()=>{
        setusedata(useText);
        setuseText("");
        temp = 0
        changeImg1();
    }
    // ----------
    return (
        <>
            <Contacts />
            <div className="flexCol ContainerChat Width3-5 Border-left">
                <div className='Logincontainer flexRow space-evenly'>
                    <div className='flexRow Currentlogin P1 P-T2'>
                        <img className=' Currentlogin pointer' src={Location.state.img + ".jpg"} />
                    </div>
                    <p className='userNameChat'> {Location.state.name}</p>
                    <div className='Width4 flexRow justify-content-end align-item-center P1'>
                        <img className=' icon-size P1 P-L2 pointer' src="search.png" />
                        <img className=' icon-size P1 P-L2 pointer' src="more.png" />
                    </div>
                </div>
                <div className='chatboard flexCol '>
                    <Chatboard />
                </div>

                <div style={
                    {
                        display: useEmojiPicker ? "block" : "none",
                        width: "fit-content",
                        height: 850,
                        bottom: 60,
                        overflow: "hidden",
                        backgroundColor: "#f0f2f5",
                    }}>
                    <Picker
                        style={{ backgroundColor: "#f0f2f5" }}
                        data={data} onEmojiSelect={addEmoji} />
                </div>

                <div className='Logincontainer flexRow space-evenly P0'>
                    <img className='Width1 icon-size P3 pointer' src="smile.png"
                        onClick={() => { setuseEmojiPicker((p) => (!p)); }} />
                    <img className='Width1 icon-size P3 pointer' src="attached.png" />
                    <div className='Width4 flexRow justify-content-end align-item-center P1'>
                        <input className="chatinput Width4 M1 P2" placeholder='Search or start new chat'
                            ref={textInput}
                            onChange={(e) => { setuseText(e.target.value); changeImg(); }}
                            value={useText}
                        />
                        <img className='icon-size P1  pointer' 
                        ref={ref} id="Enter" src="voice.png"
                        onClick={sendData}
                         />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chat