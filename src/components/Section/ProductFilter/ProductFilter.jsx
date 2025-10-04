import './productFilter.css'

function ProductFilter() {
    return (
        <div className="filter_container">
            <h4>Фильтрация</h4>
            <div className="filter_1">
                <div className="filter1_1">
                    <input type="checkbox" />
                    <p>Можно собирать</p>
                </div>
                <div className="filter1_1">
                    <input type="checkbox" />
                    <p>Новинки</p>
                </div>
            </div>
            <div className="filter_2">
                <h5>Цена от и до:</h5>
                <div className="price_filter">
                    <div className="price_1 price0">
                        <input type="tel" />
                        <span>₽</span>
                    </div>
                    <div className="price_2 price0">
                        <input type="tel"/>
                        <span>₽</span>
                    </div>
                </div>
            </div>
            <div className="filter_3">
                <div className="filter_ingredient">
                    <h5>Ингредиенты:</h5>
                    <div className="filter3_">
                        <div className="filter_3_1">
                            <input type="checkbox" />
                            <p>Сырный соус</p>
                        </div>
                        <div className="filter_3_1">
                            <input type="checkbox" />
                            <p>Моцарелла</p>
                        </div>
                        <div className="filter_3_1">
                            <input type="checkbox" />
                            <p>Чеснок</p>
                        </div>
                        <div className="filter_3_1">
                            <input type="checkbox" />
                            <p>Солённые огурчики</p>
                        </div>
                        <div className="filter_3_1">
                            <input type="checkbox" />
                            <p>Красный лук</p>
                        </div>
                        <div className="filter_3_1">
                            <input type="checkbox" />
                            <p>Томаты</p>
                        </div>
                    </div>
                </div>
                <div className="filter_type">
                    <h5>Тип теста:</h5>
                    <div className="filter_type_1">
                        <div className="filter_type1_">
                            <input type="radio" name="type_paste" id="" />
                            <p>Традиционное</p>
                        </div>
                        <div className="filter_type1_">
                            <input type="radio" name="type_paste" id="" />
                            <p>Тонкое</p>
                        </div>
                        <button>Применить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductFilter