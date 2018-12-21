import React, { Component } from 'react';

class UserInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
           name: 'noah'
        }
      }

    submit(event) {
        this.setState({
          name: event.target.value
        })
      }
    
    render() {
        return (
            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" onClick={this.submit}/>
            </form>
        )
    }
}

export default UserInput;
