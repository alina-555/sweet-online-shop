import { DownUpIcon } from '../../../assets/icons/Icons'
import './productMenu.css'

function ProductMenu(){
    return(
        <div className="container productMenu_container">
            <h3>Все пиццы</h3>
            <div className="menu_sort">
                <div className="menu">
                    <h4 className='menu_active'>Все</h4>
                    <h4>Мясные</h4>
                    <h4>Острые</h4>
                    <h4>Сладкие</h4>
                    <h4>Вегетарианские</h4>
                    <h4>С курицей</h4>
                    <h4>Ещё </h4>
                </div>
                <div className="sort">
                    <span><DownUpIcon/></span>
                    <p>Сортировка: <span>рейтингу</span></p>
                </div>
            </div>
        </div>
    )
}

export default ProductMenu