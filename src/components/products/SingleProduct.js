import React, {Component} from 'react';

class SingleProduct extends Component {

    showMaxQuantity;
    isProductInStock;
    product;

    render() {
        this.product = this.props.product;

        if (this.product.maxQuantityPerOrder > 0) {
            this.showMaxQuantity = this.product.maxQuantityPerOrder + " " + this.product.quantityType;
        }
        if(!this.product.inStock) {
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
                            <input id="price" className="form-input block w-full pl-4 sm:text-sm sm:leading-5" placeholder="0.00"/>
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