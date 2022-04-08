
import img_cryptos_landing from '../../assets/images/img_cryptos_landing.svg';
const LandingPage = (props:any) => {
    return (
        <div className="mx-auto">
            <img src={ img_cryptos_landing } alt="logo" className="img-cryptos" />
            <h1 className="page-title">Confidential and Secure Private<br/>keys never leave your device</h1>                
            <p className="introduction">Private keys never leave your device</p>
            <button 
                onClick={(e:any) => {props.setPage(1)}}
                className="btn btn-primary create-wallet-btn"
                style={{ marginTop: "150px" }}> 
                Create a new wallet
                </button>               
            <p className="already-have-wallet">I already have a wallet</p> 
            <ol className="custom-carousel-indicators">
                <li className="active"></li>
                <li className="un-active"></li>
                <li className="un-active"></li>
            </ol>
        </div>
    );
}

export default LandingPage;

