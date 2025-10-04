import Product from './Product/Product'
import ProductFilter from './ProductFilter/ProductFilter'
import ProductMenu from './ProductMenu/ProductMenu'
import './section.css'

function Section({openModal}){
    return(
        <section>
            <ProductMenu/>
            <div className="filter_product container">
                <ProductFilter/>
                <Product openModal={openModal}/>
            </div>
        </section>
    )
}

export default Section