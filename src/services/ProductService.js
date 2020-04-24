import AjaxService from "./AjaxService";

export class ProductService {

    getAjaxService() {
        if (!this.ajaxService) {
            this.ajaxService = new AjaxService();
        }
        return this.ajaxService;
    }

    getAllProducts() { return this.getAjaxService().get('/products/')};

    preOrderProducts(bodyData, customerPhoneNumber) {
        return this.getAjaxService().post(`/pre-order/${customerPhoneNumber}`, bodyData);
    }

    vendorAcceptsOrder(uuid) { return this.getAjaxService().get(`/pre-order/accept/${uuid}`)};

    vendorDeniesOrder(uuid) { return this.getAjaxService().get(`/pre-order/deny/${uuid}`)};
}
