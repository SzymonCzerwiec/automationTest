import { getElement } from "cypress/utils/selector";

export class LayerCart {

    public getProccedToCheckoutButton = getElement('#layer_cart [title="Proceed to checkout"]');
}
