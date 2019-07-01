import React, {Component} from 'react';

class Contact extends Component {
    onSubmit = () => {
        this.props.history.push('/');
    }

    
    render() {
        return (
            <div>
                <input type="text" id="name"/>
                <input type="email" id="email"/>
                <button onClick={this.onSubmit}>Submit</button>
            </div>
        );
    }
}

export default Contact;