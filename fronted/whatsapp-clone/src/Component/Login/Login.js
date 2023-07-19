import react, { useState } from "react"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import "../css/style.css"
import { Navigate } from "react-router-dom"
const Login = () => {
    const [Phoneuse, setPhoneuse] = useState({
        name: "",
        phone: ""
    })
    const setPhone = (e) => {
        const {name, value} = e.target
        setPhoneuse({
            ...Phoneuse,
            [name]: value
        })
    }
    const navigate = useNavigate();

    const loginCridential = () => {
        const {name, phone} = Phoneuse
        if (name && phone) {
            axios.post("http://localhost:8082/Login", Phoneuse)
                .then(res => {
                    console.log(res)
                    
                })
                navigate(`/Contacts`, { state: { name: name, phone: phone } })
        }
    }


    return (
        <>
            <div className="justify-content-center align-item-center Width4 flexCol">
                <div className="  BackgroundChat height1 Width2 justify-content-center align-item-center flexCol P1">
                    <div className="Width3 flexRow M1">
                        <span>Enter Name:</span>
                        <input className="Width2 M1"
                            value={Phoneuse.name}
                            Placeholder="Enter Phone Name"
                            name="name"
                            onChange={setPhone}
                            
                        ></input>
                    </div>
                    <div className="Width3 flexRow M1">
                        <span>Enter Phone:</span>
                        <input Placeholder="Enter Phone number"
                            name="phone"
                            value={Phoneuse.phone}
                            onChange={setPhone}
                            className="Width2 M1"></input>
                    </div>
                </div>
                <div className="BackgroundChat  Width2 justify-content-center align-item-center flexCol P1">
                    <button onClick={loginCridential}>Submit</button>
                </div>
            </div>
        </>
    )
}
export default Login;