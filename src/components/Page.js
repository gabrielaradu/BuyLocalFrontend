import React, {Component} from 'react';

const Page = (InnerComponent) => class extends Component {

    render() {
        return (
            <InnerComponent {...this.props} toasts={this.props.toasts}/>
        );
    }
};

export default Page;