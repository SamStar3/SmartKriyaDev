

export default function ProductStatus() {
    return (
        <div className="tp-shop-widget-content">
            <div className="tp-shop-widget-checkbox">
                <ul className="filter-items filter-checkbox">
                    <li className="filter-item checkbox">
                        <input id="on_sale" type="checkbox" />
                        <label htmlFor="on_sale">On sale</label>
                    </li>
                    <li className="filter-item checkbox">
                        <input id="in_stock" type="checkbox" />
                        <label htmlFor="in_stock">In Stock</label>
                    </li>
                </ul>
            </div>
        </div>
    )
}
