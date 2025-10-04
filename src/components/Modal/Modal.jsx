import { CloseIcon } from '../../assets/icons/Icons'
import './modal.css'
import pizzaIng1 from '../../assets/images/pizza_ing1.png'
import pizzaIng2 from '../../assets/images/pizza_ing2.png'
import pizzaIng3 from '../../assets/images/pizza_ing3.png'



function Modal({ name, price, description, img , closeModal}) {
    console.log(name);
    
    return (
        <div className="modal">
            <div className="modal_window">
                <div className="modal_img">
                    <img src={img} alt={name} />
                </div>
                <div className="modal_content">
                    <div className="modal_close_icon" onClick={closeModal}>
                        <CloseIcon />
                    </div>
                    <div className="content_product">
                        <h2>{name}</h2>
                        <div className="full_size">
                            <div className="size_container">
                                <span className='active_size'>Маленькая</span>
                                <span>Средняя</span>
                                <span>Большая</span>
                            </div>
                            <div className="paste_size_container">
                                <span>Традиционное</span>
                                <span className='active_size'>Тонкое</span>
                            </div>
                        </div>
                        <div className="other">
                            <h3>Добавить по вкусу</h3>
                            <div className="other_ingredient">
                                <div className="ingredient">
                                    <div className="ing_img">
                                        <img src={pizzaIng1} alt="" />
                                    </div>
                                    <p>Сырный бортик</p>
                                    <span>179 ₽</span>
                                </div>
                                <div className="ingredient">
                                    <div className="ing_img">
                                        <img src={pizzaIng2} alt="" />
                                    </div>
                                    <p>Сливочная моцарелла</p>
                                    <span>79 ₽</span>
                                </div>
                                <div className="ingredient">
                                    <div className="ing_img">
                                        <img src={pizzaIng3} alt="" />
                                    </div>
                                    <p>Сыры чеддер и пармезан</p>
                                    <span>79 ₽</span>
                                </div>
                            </div>
                        </div>
                        <button>Добавить в корзину за {price}₽</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Modal