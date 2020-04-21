import React, {Component} from 'react';
import {ErrorMessage, Field, Formik} from "formik";

const generalQuantities = [
    {value: '0', label: '0'},
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
            <section className="p-4">
                <Formik
                    initialValues={{
                        name: this.product.name,
                        minQuantityPerOrder: this.product.minQuantityPerOrder,
                        quantityType: this.product.quantityType,
                        price: this.product.price,
                        currency: this.product.currency
                    }}
                    validate={values => {
                        return {};
                    }}
                    onSubmit={(values, {setSubmitting}) => {
                        setTimeout(() => {
                            if(values.selectedQuantity > 0) {
                                console.log("values on submit are: ", values);
                                this.props.updateListOfAddedItemsFromTheShoppingCart(values);
                                this.props.addToTotal(values);
                            }

                            setSubmitting(false);
                        }, 400);
                    }}
                    validateOnChange={(values) => console.log("values on change: " + values)}
                >
                    {({
                          handleSubmit,
                          isSubmitting,
                      }) => (
                        <form onSubmit={handleSubmit}>
                            <Field type="name" name="name" className="text-pink-500 font-bold"/>
                            <ErrorMessage name="name" component="div"/>
                            <Field
                                component="select"
                                id="selectedQuantity"
                                name="selectedQuantity"
                                className={"text-black p-2"}
                                multiple={false}>
                                {generalQuantities.map(item => <option value={item.value} key={item.value}>{item.label}</option>)}
                            </Field>
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-3"
                                type="submit" disabled={isSubmitting}>Add
                            </button>
                            <div className="flex items-center text-black font-bold">
                                Price: {this.product.price} {this.product.currency}
                            </div>
                            <div className="flex items-center text-black">
                                Min quantity: {this.product.minQuantityPerOrder} {this.product.quantityType}
                            </div>
                        </form>
                    )}
                </Formik>
            </section>
        );
    }

    onChangedSelectedQuantity(value) {
        console.log("changed value: " + value);
    }
}

export default SingleProduct;