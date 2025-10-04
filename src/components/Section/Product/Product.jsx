import './product.css'
import product1 from '../../../assets/images/img-pizza-1.png'
import product2 from '../../../assets/images/img-pizza-2.png'
import product3 from '../../../assets/images/img-pizza-3.png'
import product4 from '../../../assets/images/img-pizza-4.png'
import product5 from '../../../assets/images/img-pizza-5.png'
import product6 from '../../../assets/images/img-pizza-6.png'
import ProductItem from './ProductItem/ProductItem'

function Product({openModal}){
    const products =[
        {
            // id: new Date().getTime().toString(),
            id: 1,
            img: product1,
            name: 'Сырный цыпленок',
            description: 'Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок',
            price: 395
        },
        {
            // id: new Date().getTime().toString(),
            id: 2,
            img: product2,
            name: 'Диабло',
            description: 'Острая чоризо, острый перец халапеньо, соус барбекю, митболы, томаты, сладкий перец, красный лук, моцарелла',
            price: 449
        },
        {
            // id: new Date().getTime().toString(),
            id: 3,
            img: product3,
            name: 'Чизбургер-пицца',
            description: 'Мясной соус болоньезе, соус бургер, соленые огурчики, томаты, красный лук, моцарелла',
            price: 399
        },
        {
            // id: new Date().getTime().toString(),
            id: 4,
            img: product4,
            name: 'Сырный цыпленок',
            description: 'Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок',
            price: 395
        },
        {
            // id: new Date().getTime().toString(),
            id: 5,
            img: product5,
            name: 'Диабло',
            description: 'Острая чоризо, острый перец халапеньо, соус барбекю, митболы, томаты, сладкий перец, красный лук, моцарелла',
            price: 449
        },
        {
            // id: new Date().getTime().toString(),
            id: 6,
            img: product6,
            name: 'Чизбургер-пицца',
            description: 'Мясной соус болоньезе, соус бургер, соленые огурчики, томаты, красный лук, моцарелла',
            price: 399
        }
    ]

    return(
        <div className="product_container">
            {
                products.map((el)=>(
                    <ProductItem key={el.id} name={el.name} description={el.description} price={el.price} img={el.img} openModal={openModal}/>
                ))
            }
        </div>
    )
}

export default Product