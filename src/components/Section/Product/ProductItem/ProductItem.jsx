import './productItem.css'

function ProductItem({name,price,description,img,openModal}){
    return(
        <div className="product">
            <div className="product_img">
                <img src={img} alt={name} />
            </div>
            <div className="product_name_price">
                <div className="product_name_des">
                    <h3 onClick={openModal}>{name}</h3>
                    <p>{description}</p>
                </div>
                <div className="price price2">
                    <p>от <span>{price} ₽</span></p>
                </div>
            </div>
        </div>
    )
    
}

export default ProductItem