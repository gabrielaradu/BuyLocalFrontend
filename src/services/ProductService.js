import AjaxService from "./AjaxService";

export class ProductService {

    getAjaxService() {
        if (!this.ajaxService) {
            this.ajaxService = new AjaxService();
        }
        return this.ajaxService;
    }

    getAllProducts() { return this.getAjaxService().get('/products')};

    verifyCustomerPhoneNumber(phone) { return this.getAjaxService().post('', phone)};

    createPreOrder(order) { return this.getAjaxService().post('', order)};
}
