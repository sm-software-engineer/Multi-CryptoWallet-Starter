import React, {useState} from 'react'
import img_narrow_mark from '../../assets/images/narrow_mark.png';
import icon_back from '../../assets/images/icon_back.svg';
import ReCAPTCHA from "react-google-recaptcha";
 
const CreatePsw = (props:any) => {
    const [flag, setFlag] = useState(true);
    return (
        <div className="w-100">
            <img 
            onClick={(e:any) => {props.setPage(1)}} style={{ cursor:'pointer' }} 
            src={icon_back} alt="narrow mark" className="img-icon-back"/>            
            <h1 className="page-title" style={{ padding: "0 106px", marginTop: "77px" }}>Personal Details</h1>                
            <p className="introduction">Enter your email address and password.</p>

            <input type="email" className="form-control user-private-info" id="email" placeholder="Enter email" name="email" style={{margin: "86px auto 10px auto", width: "70%"}}></input>
            <input type="password" className="form-control user-private-info" id="password" placeholder="Enter password" style={{margin: "10px auto 10px auto", width: "70%"}} name="password"></input>
            <input type="password" className="form-control user-private-info" id="password-confirm" placeholder="Confirm password" name="password-confirm" style={{margin: "10px auto 10px auto", width: "70%"}}></input>         
            <div style={{marginTop: "20px"}} className="d-flex justify-content-center">
            <ReCAPTCHA sitekey="6LcqP8YbAAAAAJaM69BkRM7CEA-FouyFJCs62rtj" onChange={(value) => { value && setFlag(!flag);  }} />
            </div>

            
            
            
            <button 
                onClick={(e:any) => {props.setPage(3)}}
                className="btn btn-primary create-wallet-btn"
                style={{ marginTop: "21px 195px 0 195px", width: "414px" }} disabled={ flag }>
                Proceed
            </button>               
            <ol className="custom-carousel-indicators">
                <li className="un-active"></li>
                <li className="active"></li>
                <li className="un-active"></li>
            </ol>                       
        </div>
    );
}

export default CreatePsw;

