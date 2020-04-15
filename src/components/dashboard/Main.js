import React, {Component} from 'react';
import Footer from "../common/Footer";
import About from "../common/About";
import Header from "../common/Header";
import Products from "../products/Products";

class Main extends Component {

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
}

export default Main;