import React, {Component} from 'react';
import Main from "./Main";
import Page from "../Page";

class MainPage extends Component {
    render() {
        const ComponentHoc = Page(Main);
        return (
            <div className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
                <ComponentHoc {...this.props}/>
            </div>
        );
    }
}

export default MainPage;
