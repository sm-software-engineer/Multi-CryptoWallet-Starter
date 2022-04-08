import React, {useState} from 'react'
import img_narrow_mark from '../../assets/images/narrow_mark.png';
import icon_back from '../../assets/images/icon_back.svg';
import { propTypes } from 'react-bootstrap/esm/Image';
 
const LegalInfo = (props:any) => {
    const [flag, setFlag] = useState(true);
    return (
        <div>
            <img
            onClick={(e:any) => {props.setPage(0)}} 
            src={icon_back} alt="narrow mark" className="img-icon-back" style={{ cursor:'pointer'}} />            
            <h1 className="page-title" style={{ padding: "0 106px", marginTop: "77px" }}>Legal Information</h1>                
            <p className="introduction">Please review Pal Wallet’s Terms of Service and <br/>Privacy Policy.</p>
            
            <ul className="list-group" style={{ marginRight:"92px", marginLeft:"92px"}}>               
                <li className="list-group-item list-group-item-action" style={{ textAlign: "left"}}>
                    <span style={{ fontSize: 18}}>Action item</span>
                    <img src={img_narrow_mark} alt="narrow mark" className="img-narrow-mark" style={{ float: "right"}}/>
                </li>
                <li className="list-group-item list-group-item-action" style={{ textAlign: "left"}}>
                    <span style={{ fontSize: 18}}>Terms of Service</span>
                    <img src={img_narrow_mark} alt="narrow mark" className="img-narrow-mark" style={{ float: "right"}}/>
                </li>
            </ul>

            <div className="form-check-inline" style={{ margin: "200px 195px 0 195px", textAlign:"left"}}>
                <label className="form-check-label" htmlFor="check2">                    
                    <input onChange={(e:any) => { setFlag(!e.target.checked);  }}
                    type="checkbox" className="form-check-input" id="check2" style={{height: "25px", width: "25px", marginRight: "22px"}} />
                    <span>I have read and accept the Terms of Service<br />and Privacy Policy. </span>
                </label>
            </div>
            
            
            <button 
                onClick={(e:any) => {props.setPage(2)}}
                className={"btn btn-primary create-wallet-btn " }
                style={{ marginTop: "21px 195px 0 195px", width: "414px"}}  disabled={ flag } >
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

export default LegalInfo;

