import React, {Component} from 'react';
import {ProductService} from "../../services/ProductService";
import VendorDetailsItem from "./VendorDetailsItem";

class Products extends Component {
    productService = null;

    constructor(props) {
        super(props);

        this.state = {
            vendorsAndTheirProducts: [{
                vendorId: 0,
                vendorName: '',
                products: [],
            }],
            addedProducts: [],
            totalSum: 0.00,
            currency: '',
        }
    }

    componentDidMount() {
        this.getProducts();
    }

    render() {
        return (
            <section className="bg-white">
                <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
                    <div className="w-2/3 mx-auto">
                        <div className="bg-white shadow-md rounded my-6">
                            <table
                                className="text-left w-full border-collapse">
                                <thead>
                                <tr></tr>
                                </thead>
                                <tbody>
                                {Object.entries(this.state.vendorsAndTheirProducts).map(option => {
                                    return <VendorDetailsItem key={option[0]} data={option}
                                                              addToTotal={(selectedQuantity, price, currency) => this.addToTotal(selectedQuantity, price, currency)}
                                                              updateProductsForVendor={(vendorId, vendorName, productId, productName, selectedQuantity, quantityType) =>
                                                                  this.updateProductsForVendor(vendorId, vendorName, productId, productName, selectedQuantity, quantityType)}/>
                                })}
                                </tbody>
                            </table>
                            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                                <div className="flex bg-pink-200">
                                    <div className="flex-1 text-gray-200 text-center px-4 py-2 m-2">
                                        <dd className="mt-1 text-lg leading-5 text-black sm:mt-0 sm:col-span-4">
                                            The order is not final until we confirm it by SMS
                                        </dd>
                                    </div>
                                    <div className="flex-1 text-gray-700 text-center px-4 py-2 m-2">
                                        <dt className="text-sm leading-5 font-bold text-black">
                                            Total: {this.state.totalSum} {this.state.currency}
                                        </dt>
                                    </div>
                                    <div className="text-gray-700 text-center m-2">
                                        <button
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                            onClick={() => this.savePreOrder()}>
                                            Order
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    getProducts = async () => {
        await this._getProductService().getAllProducts().then(vendorsAndTheirProductsResponse => {
            if (vendorsAndTheirProductsResponse !== undefined) {
                this.setState({vendorsAndTheirProducts: vendorsAndTheirProductsResponse})
            } else {
                this.noDataFound();
            }
        });
    };

    savePreOrder = async () => {
        //TODO add a phone nr here
        let customerPhoneNumber = "";
        await this._getProductService().preOrderProducts(this.state.addedProducts, customerPhoneNumber);
    };

    noDataFound() {}

    updateProductsForVendor = (vendorId, vendorName, productId, productName, selectedQuantity, quantityType) => {
        let existingData = this.state.addedProducts.length > 0 && this.state.addedProducts.filter((item, index) => item.vendorId === vendorId);
        if (existingData.length > 0) {
            // We already have saved something for this vendor. we need to update the product array
            let products = existingData[0].products;
            products.push({productId: productId, productName: productName, selectedQuantity: selectedQuantity, quantityType: quantityType});
        } else {
            // We don't already have data for this vendor
            this.setState({
                addedProducts: [...this.state.addedProducts, {
                    vendorId: vendorId,
                    vendorName: vendorName,
                    products: [{productId: productId, productName: productName, selectedQuantity: selectedQuantity, quantityType: quantityType}],
                }]
            });
        }
    };

    addToTotal = (selectedQuantity, price, currency) => {
        let newTemporarySum = selectedQuantity * price;
        this.setState((prevState) => {
            return prevState.totalSum += newTemporarySum
        });
        this.setState({currency: currency})
    };

    _getProductService() {
        if (!this.productService) {
            this.productService = new ProductService();
        }
        return this.productService;
    }
}

export default Products;