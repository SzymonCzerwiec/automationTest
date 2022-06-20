import { getElement } from "cypress/utils/selector";

export class TabContent {

    public getSearchedProductListByTitle = getElement('.product_list .product-container .product-name');
    public getPriceOfTheProductOnHomePage = getElement('#homefeatured .first-in-line.first-item-of-tablet-line .right-block span.product-price');
    public getAddToCartButton = getElement('#homefeatured .first-in-line.first-item-of-tablet-line .right-block .ajax_add_to_cart_button');
}
