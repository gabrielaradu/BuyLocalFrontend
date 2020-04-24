import React, {Component} from 'react';
import {ErrorMessage, Field, Formik} from "formik";
import * as Yup from "yup";

class CustomerPhoneForm extends Component {
    render() {
        const phoneRegExp = '^\\+(?:[0-9] ?){6,14}[0-9]$';
        return (
            <section className="container px-12 py-6">
                <Formik
                    initialValues={{phone: ""}}
                    onSubmit={(values, {setSubmitting}) => {
                        setTimeout(() => {
                            if(values.phone !== undefined) {
                                this.props.addCustomerPhoneNumber(values.phone);
                            }
                            setSubmitting(false);
                        }, 500);
                    }}
                    validateOnChange={(values) => {}}
                >
                    {({
                          handleSubmit,
                          isSubmitting,
                      }) => (
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="phone" className="text-black mr-3">A phone number that we can reach you at.
                                Only for demo purposes this would be the number for vendors as well:</label>
                            <Field
                                name="phone"
                                type="phone"
                                className="shadow appearance-none border border-black-800 rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline mr-3"
                                placeholder="Example: +407500000000"
                                validate={value =>
                                    Yup.string()
                                        .matches(
                                            phoneRegExp,
                                            "Please provide your valid phone number"
                                        )
                                        .validate(value)
                                        .then(() => undefined)
                                        .catch(({errors}) => errors[0])
                                }
                            />
                            <button id="validatePhone" name="validatePhone"
                                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                                    type="submit" disabled={isSubmitting}>Use my phone number
                            </button>
                            <ErrorMessage name="phone" component="div" className="text-red-500 text-xs italic"/>
                        </form>
                    )}
                </Formik>
            </section>
        );
    }
}

export default CustomerPhoneForm;