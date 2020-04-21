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
            <tr>
                <td className="px-12 border-b border-grey-light text-black w-1/3">{vendorWithTheirProducts.vendorName}</td>
                <td className="flex flex-wrap mx-4">
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
        this.props.addToTotal(item.selectedQuantity, item.price, item.currency);
    }
}

export default VendorDetailsItem;