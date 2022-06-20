import { getElement } from "cypress/utils/selector";

export class CartSummary {

    public getUnitPriceInCheckout = getElement('.price span.price');
}
