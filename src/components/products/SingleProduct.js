import React, {Component} from 'react';
import Select from 'react-select';

const generalQuantities = [
    {value: '1', label: '1'},
    {value: '2', label: '2'},
    {value: '3', label: '3'},
    {value: '4', label: '4'},
    {value: '5', label: '5'},
    {value: '6', label: '6'},
    {value: '7', label: '7'},
    {value: '8', label: '8'},
    {value: '9', label: '9'},
    {value: '10', label: '10'},
];

class SingleProduct extends Component {

    showMaxQuantity;
    isProductInStock;
    product;

    render() {
        this.product = this.props.product;

        if (this.product.maxQuantityPerOrder > 0) {
            this.showMaxQuantity = this.product.maxQuantityPerOrder + " " + this.product.quantityType;
        }
        if (!this.product.inStock) {
            this.isProductInStock = "Out Of Stock";
        }
        return (
            <section>
                <div className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                            <img className="h-10 w-10 rounded-full" alt=""
                                 src="https://images.unsplash.com/photo-1558947462-82bc86a0dac6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
                        </div>
                        <div className="ml-4">
                            <div className="text-sm leading-5 font-medium text-gray-900">{this.product.name}</div>
                            <div className="text-sm leading-5 text-blue-600">Min: {this.product.minQuantityPerOrder} {this.product.quantityType}</div>
                            <div className="text-sm leading-5 text-blue-600">{this.showMaxQuantity}</div>
                            <div className="text-sm leading-5 text-blue-600">Price: {this.product.price} {this.product.currency}</div>
                        </div>
                        <div className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <Select id="price" options={generalQuantities} label="Select quantity for the selected product"/>
                        </div>
                        <div className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-200 text-green-800">{this.isProductInStock}</span>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default SingleProduct;