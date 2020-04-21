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
            selectedProducts: [],
            totalSum: 0.00,
            currency: '',
        }
    }

    componentDidMount() {
        this.getProducts();
    }

    render() {
        return (
            <section className="bg-white py-8">
                <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
                    <div className="w-2/3 mx-auto">
                        <div className="bg-white shadow-md rounded my-6">
                            <table
                                className="text-left w-full border-collapse">
                                <thead>
                                <tr>
                                    <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Local Vendor</th>
                                    <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Products</th>
                                </tr>
                                </thead>
                                <tbody>
                                {Object.entries(this.state.vendorsAndTheirProducts).map(option => {
                                    return <VendorDetailsItem key={option[0]} data={option} updateSelectedProducts={(product) => this.updateSelectedProducts(product)}
                                                              addToTotal={(selectedQuantity, price, currency) => this.addToTotal(selectedQuantity, price, currency)}/>
                                })}
                                </tbody>
                            </table>
                            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                                <div className="flex bg-gray-200">
                                    <div className="flex-1 text-gray-700 text-center px-4 py-2 m-2">
                                        <dd className="mt-1 text-sm leading-5 text-black sm:mt-0 sm:col-span-4">
                                            The order is not final until we confirm it by SMS
                                        </dd>
                                    </div>
                                    <div className="flex-1 text-gray-700 text-center px-4 py-2 m-2">
                                        <dt className="text-sm leading-5 font-bold text-black">
                                            Total: {this.state.totalSum} {this.state.currency}
                                        </dt>
                                    </div>
                                    <div className="text-gray-700 text-center m-2">
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => this.savePreOrder()}>
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
        debugger
        await this.getProducts().preOrderProducts(this.state.selectedProducts);
    };

    noDataFound() {

    }

    updateSelectedProducts = (product) => {
        this.setState((prevState) => {
            prevState.selectedProducts.push(product);
        });
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