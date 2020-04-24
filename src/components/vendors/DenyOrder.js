import React, {Component} from 'react';
import {ProductService} from "../../services/ProductService";

class DenyOrder extends Component {
    productService = null;

    componentDidMount() {
        debugger
        const {uuid} = this.props.match.params;

        if (uuid !== undefined) {
            this.denyOrder(uuid);
        }
    }

    render() {
        return (
            <section className="bg-white">
                <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
                    <div className="w-2/3 mx-auto">Thank you for your response. The customer was gently notified that
                        you cannot honor the order.
                    </div>
                </div>
            </section>
        );
    }

    denyOrder = async (uuid) => {
        await this._getProductService().vendorDeniesOrder(uuid).then(() => {});
    };

    _getProductService() {
        if (!this.productService) {
            this.productService = new ProductService();
        }
        return this.productService;
    }
}

export default DenyOrder;