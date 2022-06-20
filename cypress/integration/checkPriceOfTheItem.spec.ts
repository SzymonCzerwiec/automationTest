import { LayerCart } from "cypress/classes/layerCart";
import { CartSummary } from "cypress/classes/cartSummary";
import { TabContent } from "cypress/classes/tabContent";

const tabContent = new TabContent();
const layerCart = new LayerCart();
const cartSummary = new CartSummary();

describe('Item price', () => {

    it('Homepage and basket price of the item is the same', () => {
            cy.visit('');
            tabContent.getPriceOfTheProductOnHomePage().invoke('text').then((myValue: string) => {
            tabContent.getAddToCartButton().click();
            layerCart.getProccedToCheckoutButton().click();
            cartSummary.getUnitPriceInCheckout()
                .should('have.text', myValue.trim());
            })
        });
    });
