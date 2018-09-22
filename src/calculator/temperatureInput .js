import React from 'react'
import './common.css'
const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
  };
  
class TemperatureInput  extends React.Component{
    // constructor(props){
    //     super(props)
    //     // this.state = {temperature: '', scale: 'c'};
    // }
    handleChange = (e) => {
        // this.setState({
        //     temperature:e.target.value
        // })
        this.props.onTemperatureChange(e.target.value);
    }
    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
          <fieldset className="input-tem">
            <legend>Enter temperature in {scaleNames[scale]}:</legend>
            <input value={temperature} onChange={this.handleChange} />
          </fieldset>
        );
    }
}

export default TemperatureInput ;