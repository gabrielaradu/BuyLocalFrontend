import React, {Component} from 'react';

class NotFound extends Component {
    render() {
        return (
            <div className="container mx-auto px-4">
                <img src={require('../img/undraw_not_found.png')} alt="The page you are looking for is not found"/>
            </div>
        );
    }
}

export default NotFound;
