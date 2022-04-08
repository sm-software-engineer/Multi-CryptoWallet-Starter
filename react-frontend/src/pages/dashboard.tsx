import logo from '../assets/images/logo.svg';
import icon_menu from '../assets/images/icon_menu.svg';
import LoginPage from './login';

const Dashboard = () => {
    return (
        <div>
            <div className="header text-center">                
                <img src={logo} alt="logo" className="logo" />
                <img src={icon_menu} alt="logo" className="icon-menu" />                
            </div>
            <div className="main text-center row">               
                <LoginPage></LoginPage>
            </div>
            <div className="footer"></div>
            
        </div>
    );
}

export default Dashboard;

