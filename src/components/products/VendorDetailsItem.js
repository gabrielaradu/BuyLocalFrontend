import React, {Component} from 'react';
import SingleProduct from "./SingleProduct";

class VendorDetailsItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
        }
    }

    render() {
        let vendorWithTheirProducts;
        if (this.props.data[1] !== undefined) {
            vendorWithTheirProducts = this.props.data[1];
        }
        return (
            <tr className="hover:bg-grey-lighter">
                <td className="py-4 px-6 border-b border-grey-light">{vendorWithTheirProducts.vendorName}</td>
                <td className="w-full max-w-lg flex flex-wrap -mx-3 mb-6">
                    {Object.keys(vendorWithTheirProducts.products).map((option, key) => {
                        return <SingleProduct key={key} product={vendorWithTheirProducts.products[key]}
                                              vendorId={vendorWithTheirProducts.vendorId}
                                              updateListOfAddedItemsFromTheShoppingCart={this.updateListOfAddedItemsFromTheShoppingCart}
                                              addToTotal={this.addToTotal}/>
                    })}
                </td>
            </tr>
        );
    }

    updateListOfAddedItemsFromTheShoppingCart = (item) => {
        this.props.updateSelectedProducts(item);
    };

    addToTotal = (item) => {
        console.log(item.currency)
        this.props.addToTotal(item.selectedQuantity, item.price, item.currency);
    }
}

export default VendorDetailsItem;