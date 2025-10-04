import { AccountIcon, CartIcon, SearchIcon } from '../../../assets/icons/Icons'
import './navItem.css'


function NavItem({openCart}) {
    return (
        <div className="search_add_container">
            <form className='search_form'>
                <div className="search_icon">
                    <SearchIcon />
                </div>
                <input type="text" placeholder='Поиск пиццы...' className='search_input' />

            </form>
            <div className="account_cart">
                <button ><AccountIcon /> Войти</button>
                <button onClick={openCart}><CartIcon /></button>
            </div>
        </div>
    )
}

export default NavItem