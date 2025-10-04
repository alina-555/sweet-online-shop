import './cart.css'

function Cart({closeCart}){
    return(
        <div className="cart_container" onClick={closeCart}>
            <div className="carts" onClick={(e)=> e.stopPropagation()}>
                <h2>Корзина</h2>
            </div>
        </div>
    )
}
export default Cart