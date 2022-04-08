import React, {useState} from 'react'
import img_cryptos from '../../assets/images/img_cryptos.svg';
import icon_back from '../../assets/images/icon_back.svg';
const LegalBackup = (props:any) => {
    const [flag, setFlag] = useState(true);
    return (
        
        <div>
            <img 
            onClick={(e:any) => {props.setPage(1)}} style={{ cursor:'pointer' }} 
            src={icon_back} alt="narrow mark" className="img-icon-back"/>
            <img src={img_cryptos} alt="logo" className="img-cryptos" />
            <h1 className="page-title">Legal information Back up your<br/>wallet now! </h1>                
            <p className="introduction">In the next step, you will see 12 words<br/>that will allow you to restore the wallet. </p>

            <div className="form-check-inline" style={{ margin: "103px 195px 20px 195px", textAlign:"left"}}>
                <label className="form-check-label" htmlFor="check2">
                    <input 
                        onChange={(e:any) => { setFlag(!e.target.checked);  }}
                        type="checkbox" className="form-check-input" id="check2" name="vehicle2" value="something" style={{ fontSize: "25px", marginRight: "22px"}} />
                    <span>In the next step, you will see 12 words that<br/>will allow you to restore the wallet. </span>
                </label>
            </div>

            <button 
                onClick={(e:any) => {props.setPage(4)}}
                className="btn btn-primary" 
                style={{ marginTop: "20px 195px 0 195px", width: "414px" }} disabled={ flag }>
                    Proceed
            </button>               
            <ol className="custom-carousel-indicators">
                <li className="un-active"></li>
                <li className="un-active"></li>
                <li className="active"></li>
            </ol>
        </div>
    );
}

export default LegalBackup;

