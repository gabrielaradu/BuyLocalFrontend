import React, {Component} from 'react';
import SingleProduct from "./SingleProduct";

class Products extends Component {
    products = null;

    constructor(props) {
        super(props);

        this.products = [
            {
                id: 1,
                name: 'Cozonac tradițional',
                price: 60,
                currency: 'RON',
                minQuantity: 1,
                maxQuantity: 0,
                quantityType: 'Item',
                inStock: true,
                vendorId: 1,
                vendorName: 'Atelierulul Artizanal de brutărie'
            },
            {
                id: 2,
                name: 'Platou cu branzeturi',
                price: 30,
                currency: 'RON',
                minQuantity: 5,
                maxQuantity: 10,
                quantityType: 'Item',
                inStock: false,
                vendorId: 1,
                vendorName: 'Gradina Verde'
            },
            {
                id: 3,
                name: 'Pork Chops',
                price: 50,
                currency: 'RON',
                minQuantity: 100,
                maxQuantity: 0,
                quantityType: 'Grams',
                inStock: true,
                vendorId: 1,
                vendorName: 'Gigel 1'
            },
            {
                id: 4,
                name: 'Platou cu branzeturi',
                price: 30,
                currency: 'RON',
                minQuantity: 5,
                maxQuantity: 10,
                quantityType: 'Item',
                inStock: true,
                vendorId: 1,
                vendorName: 'Gradina Verde'
            },
            {
                id: 5,
                name: 'Organic Cheese',
                price: 50,
                currency: 'RON',
                minQuantity: 100,
                maxQuantity: 0,
                quantityType: 'Grams',
                inStock: true,
                vendorId: 1,
                vendorName: 'Food Hub'
            },
            {
                id: 6,
                name: 'Organic Cheese',
                price: 50,
                currency: 'RON',
                minQuantity: 100,
                maxQuantity: 0,
                quantityType: 'Grams',
                inStock: true,
                vendorId: 1,
                vendorName: 'Food Hub'
            },
            {
                id: 7,
                name: 'Organic Cheese',
                price: 50,
                currency: 'RON',
                minQuantity: 100,
                maxQuantity: 0,
                quantityType: 'Grams',
                inStock: true,
                vendorId: 1,
                vendorName: 'Food Hub'
            },
            {
                id: 8,
                name: 'Organic Cheese',
                price: 50,
                currency: 'RON',
                minQuantity: 100,
                maxQuantity: 0,
                quantityType: 'Grams',
                inStock: true,
                vendorId: 1,
                vendorName: 'Food Hub'
            },
            {
                id: 9,
                name: 'Organic Cheese',
                price: 50,
                currency: 'RON',
                minQuantity: 100,
                maxQuantity: 0,
                quantityType: 'Grams',
                inStock: true,
                vendorId: 1,
                vendorName: 'Food Hub'
            }
        ];
    }

    render() {
        return (
            <section className="bg-white py-8">
                <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
                    <nav id="store" className="w-full z-30 top-0 px-6 py-1">
                        <div
                            className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
                            <a className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl "
                               href="#"></a>
                            <div className="flex items-center" id="store-nav-content">
                                <a className="pl-3 inline-block no-underline hover:text-black" href="#">
                                    <svg className="text-black fill-current hover:text-black"
                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                         viewBox="0 0 24 24">
                                        <title>Cart</title>
                                        <path
                                            d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </nav>
                    <div className="flex flex-col bg-center">
                        <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                            <div
                                className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                                <table className="min-w-full table-fixed">
                                    <thead>
                                    <tr>
                                        <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">
                                            Product Name
                                        </th>
                                        <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">
                                            In Stock
                                        </th>
                                        <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">
                                            From Vendor
                                        </th>
                                        <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">
                                            Choose Quantity
                                        </th>
                                        <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">
                                            Price
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody className="bg-white">
                                    {Object.keys(this.products).map((key, index) =>
                                        (<SingleProduct {...this.props}
                                                        key={key}
                                                        index={index}
                                                        product={this.products[key]}/>
                                        ))}

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
                                                Total: 0.00 RON
                                            </dt>
                                        </div>
                                        <div className="text-gray-700 text-center m-2">
                                            <button
                                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Order
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Products;