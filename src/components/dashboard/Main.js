import React, {Component} from 'react';
import Footer from "../common/Footer";
import About from "../common/About";
import Header from "../common/Header";
import Products from "../products/Products";
import {ProductService} from "../../services/ProductService";

class Main extends Component {

    productService = null;

    constructor(props) {
        super(props);

        this.state = {
            products: [],
        }
    }

    componentDidMount() {
        this.getProducts();
    }

    render() {
        return (
            <div>
                <Header/>
                <About/>
                <Products/>
                <Footer/>
            </div>
        );
    }

    getProducts = async () => {
        await this._getProductService().getAllProducts().then(products => {
            if (products !== undefined) {
                this.setState(products)
            } else {
                this.noDataFound();
            }
        });
    };

    noDataFound() {

    }

    _getProductService() {
        if (!this.productService) {
            this.productService = new ProductService();
        }
        return this.productService;
    }
}

export default Main;