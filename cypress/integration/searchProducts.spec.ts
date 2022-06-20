import { HeaderComponent } from "cypress/classes/headerComponent";
import { TabContent } from "cypress/classes/tabContent";

const headerComponent = new HeaderComponent();
const tabContent = new TabContent();

describe('Search filtering', () => {

    it('Shown data is filtered out properly', () => {
        cy.visit('');
        headerComponent.getSearchboxInput().type('Dress');
        headerComponent.getSearchboxButton().click();
        tabContent.getSearchedProductListByTitle()
            .each(function($el) {
                if($el.text().includes('Dress')) {
                    assert($el.text(),'Item has dress in the title')
                } else {
                    assert.isFalse($el.text().trim(), 'Item does not have word dress in the title')
                }
            });
        });
    });
