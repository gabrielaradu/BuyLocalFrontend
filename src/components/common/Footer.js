import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="container mx-auto bg-white py-8 border-t border-gray-400">
                <div className="container flex px-3 py-8 ">
                    <div className="w-full mx-auto flex flex-wrap">
                        <div className="flex w-full lg:w-1/2 ">
                            <div className="px-3 md:px-0">
                                <h3 className="font-bold text-black">About</h3>
                                <p className="py-4 text-black">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel mi ut felis
                                    tempus commodo nec id erat. Suspendisse consectetur dapibus velit ut lacinia.
                                </p>
                            </div>
                        </div>
                        <div className="flex w-full lg:w-1/2 lg:justify-end lg:text-right">
                            <div className="px-3 md:px-0">
                                <h3 className="font-bold text-black">Social</h3>
                                <ul className="list-reset items-center pt-3">
                                    <li>
                                        <a className="text-black inline-block no-underline hover:text-black hover:underline py-1"
                                           href="#">Add social links</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
                            <nav>
                                <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                                    <li><a
                                        className="inline-block no-underline hover:text-black hover:underline py-2 px-4 text-black"
                                        href="#" aria-label="the shopping option from the menu"
                                        aria-labelledby="the shopping option from the menu">Privacy Policy</a></li>
                                    <li><a
                                        className="inline-block no-underline hover:text-black hover:underline py-2 px-4 text-black"
                                        href="#" aria-label="the about option from the menu"
                                        aria-labelledby="the about option from the menu">Terms And Conditions</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
