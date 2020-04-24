import React, {Component} from 'react';
import {ProductService} from "../../services/ProductService";
import VendorDetailsItem from "./VendorDetailsItem";
import CustomerPhoneForm from "./CustomerPhoneForm";
import "react-responsive-modal/styles.css";
import {Modal} from "react-responsive-modal";

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
            customerPhoneNumber: '',
            showProductList: false,
            message: '',
            isOpen: false,
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
                            <CustomerPhoneForm addCustomerPhoneNumber={(phone) => this.addCustomerPhoneNumber(phone)}/>
                            <table
                                className="text-left w-full border-collapse">
                                <thead>
                                <tr></tr>
                                </thead>
                                <tbody>
                                {this.state.showProductList && Object.entries(this.state.vendorsAndTheirProducts).map(option => {
                                    return <VendorDetailsItem key={option[0]} data={option}
                                                              addToTotal={(selectedQuantity, price, currency) => this.addToTotal(selectedQuantity, price, currency)}
                                                              updateProductsForVendor={(vendorId, vendorName, productId, productName, selectedQuantity, quantityType) =>
                                                                  this.updateProductsForVendor(vendorId, vendorName, productId, productName, selectedQuantity, quantityType)}/>
                                })}
                                </tbody>
                            </table>
                            <div
                                className={this.state.showProductList ? "bg-white shadow overflow-hidden sm:rounded-lg visible" : "hidden"}>
                                <div className="flex bg-pink-200">
                                    <div className="flex-1 text-gray-200 text-center px-4 py-2 m-2">
                                        <dd className="mt-1 text-lg leading-5 text-black sm:mt-0 sm:col-span-4">
                                            The order is not final until we confirm it by SMS
                                        </dd>
                                    </div>
                                    <div className="flex-1 px-4 py-2 m-2">
                                        <dt className="text-sm leading-5 font-bold text-black text-center px-4 py-2 m-2">
                                            Total: {this.state.totalSum} {this.state.currency}
                                        </dt>
                                    </div>
                                    <div className="flex-1 px-4 py-2 m-2">
                                        <button
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                            onClick={() => this.savePreOrder()}>
                                            Order
                                        </button>
                                    </div>
                                </div>
                                <Modal open={this.state.isOpen} center>
                                    <div
                                        className="animated fadeInUp fixed shadow-inner max-w-md md:relative pin-b pin-x align-top m-auto justify-end md:justify-center p-8 bg-white md:rounded w-full md:h-auto md:shadow flex flex-col">
                                        <h2 className="text-4xl text-center font-hairline md:leading-loose text-grey md:mt-8 mb-4">Hello!</h2>
                                        <p className="text-xl leading-normal mb-8 text-center">
                                            {this.state.message}
                                        </p>
                                        <div className="inline-flex justify-center">
                                            <button onClick={this.toggleModal}
                                                    className="bg-grey-lighter flex-1 border-b-2 md:flex-none border-green ml-2 hover:bg-green-lightest text-grey-darkest font-bold py-4 px-6 rounded">
                                                OK
                                            </button>
                                        </div>
                                    </div>
                                </Modal>
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
        let message;
        if (this.state.addedProducts.length === 0) {
            // User didn't choose any products
            message = "Please choose some products before making a pre-order.";
        } else {
            // Try to make the request with selected products
            const preOrderProducts = await this._getProductService().preOrderProducts(this.state.addedProducts, this.state.customerPhoneNumber);
            if (preOrderProducts === undefined) {
                message = "Something happened and an error occurred when trying to send request. Please try again or contact us at test@email.com.";
            } else if (preOrderProducts.length > 0) {
                message = "The pre-order was successfully sent to vendors. Please wait for confirmation by SMS.";
            }
        }

        this.setState({
            message: message,
        });
        this.toggleModal();
    };

    toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    noDataFound() {}

    addCustomerPhoneNumber = (phone) => {
        this.setState({
            customerPhoneNumber: phone,
            showProductList: true
        });
    };

    updateProductsForVendor = (vendorId, vendorName, productId, productName, selectedQuantity, quantityType) => {
        let existingData = this.state.addedProducts.length > 0 && this.state.addedProducts.filter((item, index) => item.vendorId === vendorId);
        if (existingData.length > 0) {
            // We already have saved something for this vendor. we need to update the product array
            let products = existingData[0].products;
            products.push({
                productId: productId,
                productName: productName,
                selectedQuantity: selectedQuantity,
                quantityType: quantityType
            });
        } else {
            // We don't already have data for this vendor
            this.setState({
                addedProducts: [...this.state.addedProducts, {
                    vendorId: vendorId,
                    vendorName: vendorName,
                    products: [{
                        productId: productId,
                        productName: productName,
                        selectedQuantity: selectedQuantity,
                        quantityType: quantityType
                    }],
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