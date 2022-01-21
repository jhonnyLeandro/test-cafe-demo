import { Selector, t } from 'testcafe';

class InventoryPage {
    constructor(){
        this.productSpan = Selector('.header_secondary_container .title');
    }

    async productTitleShouldbeVisible(){
        await t.expect(this.productSpan.textContent).contains('Products')
    }
}

export default new InventoryPage();