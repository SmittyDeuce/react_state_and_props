import { Component } from "react";
class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Alex' };
        this.changeName = this.changeName.bind(this) 
        /*  was getting UserProfile.jsx:10  Uncaught TypeError: Cannot read properties of undefined (reading 'setState')
            til i added the code above
        */
    }

    // Incorrect function
    changeName() {
        this.setState({name:'Charlie'});
    }

    render() {

        const name = this.state.name;

        return (
            <div>
                <h1>User Profile</h1>
                <p>Name: {this.state.name}</p>
                <button onClick={this.changeName}>Change Name</button>
            </div>
        );
    }
}


export default UserProfile