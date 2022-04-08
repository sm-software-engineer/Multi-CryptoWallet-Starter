
import icon_back from '../../assets/images/icon_back.svg';
import icon_alert from '../../assets/images/icon_alert.svg';
const PhraseCreate = (props:any) => {
    return (
        <div>
            <img 
            onClick={(e:any) => {props.setPage(3)}} style={{ cursor:'pointer' }}  
            src={icon_back} alt="narrow mark" className="img-icon-back"/>            
            <h1 className="page-title" style={{marginTop: "50px"}}> Your Passphrase Write </h1>                
            <p className="introduction">Down or copy these words in the correct <br/>order and keep them in a safe place.  </p>
            <div className="container-show-seed-phrases">
                <div className="btn btn-outline-secondary each-seed-phrases"><span>1</span>Ruck</div>
                <div className="btn btn-outline-secondary each-seed-phrases"><span>2</span>Wife</div>
                <div className="btn btn-outline-secondary each-seed-phrases"><span>3</span>Miracle</div>
                <div className="btn btn-outline-secondary each-seed-phrases"><span>4</span>Voice</div>
                <div className="btn btn-outline-secondary each-seed-phrases"><span>5</span>Manual</div>
                <div className="btn btn-outline-secondary each-seed-phrases"><span>6</span>Cheese</div>
                <div className="btn btn-outline-secondary each-seed-phrases"><span>7</span>Normal</div>
                <div className="btn btn-outline-secondary each-seed-phrases"><span>8</span>Adapt</div>
                <div className="btn btn-outline-secondary each-seed-phrases"><span>9</span>Anxiety</div>
                <div className="btn btn-outline-secondary each-seed-phrases"><span>10</span>Shadow</div>
                <div className="btn btn-outline-secondary each-seed-phrases"><span>11</span>Permit</div>
                <div className="btn btn-outline-secondary each-seed-phrases"><span>12</span>Pause</div>
            </div>
            
            <button className="copy-button btn">Copy</button>
            <div className="seed-phrase-warning" style={{ textAlign: "left"}}>
                <img src={ icon_alert } alt="narrow mark" className="img-icon-alert"/>
                <span>Never share the recovery phrase with <br/>anyone, store it securely!</span>
            </div>

            <button
                onClick={(e:any) => {props.setPage(5)}} 
                className="btn btn-primary"
                style={{ margin: "20px 195px 0 195px", width: "414px" }}>
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

export default PhraseCreate;

