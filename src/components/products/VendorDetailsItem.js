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
                <td className="py-4 px-6 border-b border-grey-light">
                    {Object.keys(vendorWithTheirProducts.products).map((option, key) => {
                        return <SingleProduct key={option[0]} product={vendorWithTheirProducts.products[key]}
                                              vendorId={vendorWithTheirProducts.vendorId}/>
                    })}
                </td>
            </tr>
        );
    }
}

export default VendorDetailsItem;