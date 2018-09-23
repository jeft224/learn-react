import React from 'react'
import './common.css'
import Dialog from './dialog'
  
class WelcomeDialog extends React.Component {
    constructor(props){
      super(props)
      this.state = {login: ''};
    }
    render(){
        return (  
          <div>
              <Dialog title="Welcome" message="Thank you for visiting our spacecraft!">
                <input value={this.state.login} onChange={this.handleChange} />
                <button onClick={this.handleSignUp}>Sign Me Up!</button>
              </Dialog>
              
          </div>
        );
    }
    handleChange = (e) => {
      this.setState({
        login:e.target.value
      })
    }
    handleSignUp = (e) => {
      alert(`Welcome aboard, ${this.state.login}!`);
    }
}
export default WelcomeDialog;