import { getElement } from "cypress/utils/selector";

export class HeaderComponent {

    public getSearchboxInput = getElement('[id="searchbox"]');
    public getSearchboxButton = getElement('[id="searchbox"] .btn');
};
