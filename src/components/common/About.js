import React, {Component} from 'react';

class About extends Component {
    render() {
        return (
            <div className="container mx-auto bg-white py-8 border-t border-gray-400">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <p className="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">Twilio Hackathon</p>
                        <h3 className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                            Buy food locally
                        </h3>
                    </div>

                    <div className="mt-10 sm:inline-flex">
                        <ul className="md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">
                            <li>
                                <div className="flex mb-4">
                                    <div className="flex-shrink-0">
                                        <div
                                            className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                            <svg className="h-6 w-6" stroke="currentColor" fill="none"
                                                 viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h5 className="text-lg leading-6 font-medium text-black">You choose what food/ingredients you want</h5>
                                        <p className="mt-1 text-base leading-6 text-black">
                                            You will use your phone number for this pre-order, at which you will receive a verification SMS Code. It's your job to know if your mobile package can receive SMS
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="mt-10 md:mt-0">
                                <div className="flex mb-4">
                                    <div className="flex-shrink-0">
                                        <div
                                            className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                            <svg className="h-6 w-6" stroke="currentColor" fill="none"
                                                 viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                      d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h5 className="text-lg leading-6 font-medium text-black">Vendors will confirm their stock before the order is complete</h5>
                                        <p className="mt-2 text-base leading-6 text-black">
                                            Wait for vendors to approve the order or update it with as much as stock they currently have. If there is a full or partial approve from vendors, you can wait for the food delivery
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="mt-10 md:mt-0">
                                <div className="flex mb-4">
                                    <div className="flex-shrink-0">
                                        <div
                                            className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                            <svg className="h-6 w-6" stroke="currentColor" fill="none"
                                                 viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                      d="M13 10V3L4 14h7v7l9-11h-7z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h5 className="text-lg leading-6 font-medium text-black">Wait for delivery and pay online</h5>
                                        <p className="mt-2 text-base leading-6 text-black">
                                            Food arrived, then you will receive by SMS the payment link and successfully complete the payment
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
