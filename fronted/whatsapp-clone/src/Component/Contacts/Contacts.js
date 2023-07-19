import React from 'react';
import Chat from "../Chat/chat";
import "../css/style.css";
import { useNavigate } from 'react-router-dom'

// import "../../css/bootstrap-grid.css";
const names = ['alex', 'alexander', 'christian', 'jake', 'michael', 'vicky', 'nicolas', 'avtar']

const Contact = ({ Name }) => {
    const navigate = useNavigate();
    return (
        <>
            <div className='nowarp Contact justify-content-space-between align-item-center flexRow  pointer'onClick={() => { navigate("/chat", { state: { name: Name, img: Name }, }) }}>
                <div className='flexRow Currentlogin '>
                    <img className=' Currentlogin pointer ' src={Name + ".jpg"} />
                </div>
                <div className='Border-bottom Width4 flexCol nowarp pointer P-L1 P-T2' >
                    <div className='flexRow nowarp justify-content-space-between P0 M0 '>
                        <p className='P0 P-B1 M0'>{Name}</p>
                        <p className='Time P0 M0 color'>7.20 pm</p>
                    </div>
                    <p className='newChatmsg P-B2  P0 M0'>Hell {Name}</p>
                </div>
            </div>
        </>
    )
}
const Contacts = () => {
    return (
        <>
            <div className="Container flexCol nowarp  Width2-5">
                <div className='Logincontainer flexRow nowarp space-evenly P1'>
                    <img className='Width1 Currentlogin P1 pointer' src="foto.jpg" />
                    <div className='Width4 flexRow justify-content-end align-item-center P1'>
                        <img className=' icon-size P1 P-L2 pointer' src="friends.png" />
                        <img className=' icon-size P1 P-L2 pointer' src="status.png" />
                        <img className=' icon-size P1 P-L2 pointer' src="comment.png" />
                        <img className=' icon-size P1 P-L2 pointer' src="more.png" />
                    </div>
                </div>
                <div className='P1'>
                    <div className='justify-content-space-between align-item-center flexRow nowarp space-evenly Width4 Border-bottom'>
                        <div className=' justify-content-space-between align-item-center flexRow  nowarp M1 M-L1 searchBar Width4  space-evenly '>
                            <img className='flexRow Searchicon color P1 M-L1 ' src="search.png" />
                            <input className="Searchinput Width4 M1 P-bt" placeholder='Search or start new chat' />
                        </div>
                        <img className='flexRow Searchicon color P2 pointer' src="filter.png" />
                    </div>
                    <div className=' flexCol '>
                        {names.map((e, index) => {
                            return (<Contact Name={e} key={index} />)
                        })}
                    </div>
                </div>
            </div>


        </>
    )
}

export default Contacts