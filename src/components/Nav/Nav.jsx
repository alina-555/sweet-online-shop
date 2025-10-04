import './nav.css'
import NavItem from './NavItem/NavItem'
import logo from '../../assets/images/icons-pizza.png'


function Nav({openCart}){

    return(
        <nav>
            <div className="container nav_container">
                <div className="nav_logo">
                    <div className="logo_img">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="logo_name">
                        <h1>NEXT PIZZA</h1>
                        <h3>вкусней уже некуда</h3>
                    </div>
                </div>
                <NavItem openCart={openCart}/>
            </div>
        </nav>
    )
}

export default Nav