import React, {Component} from 'react';
import {ProductService} from "../../services/ProductService";

class AcceptOrder extends Component {
    productService = null;

    componentDidMount() {
        debugger
        const {uuid} = this.props.match.params;

        if (uuid !== undefined) {
            this.acceptOrder(uuid);
        }
    }

    render() {
        return (
            <section className="bg-white">
                <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
                    <div className="w-2/3 mx-auto">You successfully accepted the order from the customer. Kudos!</div>
                </div>
            </section>
        );
    }

    acceptOrder = async (uuid) => {
        await this._getProductService().vendorAcceptsOrder(uuid).then(() => {});
    };

    _getProductService() {
        if (!this.productService) {
            this.productService = new ProductService();
        }
        return this.productService;
    }
}

export default AcceptOrder;