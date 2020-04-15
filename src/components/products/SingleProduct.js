import React, {Component} from 'react';

class SingleProduct extends Component {

    render() {
        const {key, id, name, price, currency, minQuantity, maxQuantity, quantityType, inStock, vendorId, vendorName} = this.props.product;
        const showMax = maxQuantity > 0 ? "Max: " + maxQuantity + " " + quantityType : "";

        return (
            <tr key={this.props.index + 1}>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                            <img className="h-10 w-10 rounded-full"
                                 src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                 alt=""/>
                        </div>
                        <div className="ml-4">
                            <div className="text-sm leading-5 font-medium text-gray-900">{name}</div>
                            <div className="text-sm leading-5 text-blue-600">Min: {minQuantity} {quantityType}</div>
                            <div className="text-sm leading-5 text-blue-600">{showMax}</div>
                        </div>
                    </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <span
                      className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-200 text-green-800">{inStock ? "YES" : "No"}
                    </span>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-black">
                    {vendorName}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <input id="price" className="form-input block w-full pl-4 sm:text-sm sm:leading-5" placeholder="0.00"/>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="text-sm leading-5 text-black">{price} {currency}</div>
                </td>
            </tr>
        );
    }
}

export default SingleProduct;