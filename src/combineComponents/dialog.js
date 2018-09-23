import React from 'react'

function FancyBorder(props) {
    return (
      <div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children}
      </div>
    );
  }


class Dialog extends React.Component{
    render(){
        return (
          <FancyBorder color="blue">
            <h1 className="Dialog-title">{this.props.title}</h1>
            <p className="Dialog-message">{this.props.message}</p>
            {this.props.children}
          </FancyBorder>
          
        );
    }
}
export default Dialog;