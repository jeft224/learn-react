import React from 'react'

function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}


class Clock extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      date:new Date()
    }
  }
  tick(){
    this.setState({
      date: new Date()
    });
  }

  //根据生命周期来定义定时器
  // 错误处理
  componentDidCatch(error, errorInfo){
    console.log(111)
  }
  // 当组件的外传入的prop值发生改变时触发
  componentWillReceiveProps(){
    console.log(222)
  }
  //当组件的prop值和state发生改变，触发shouldComponentUpdate()函数,该函数返回true和false
  // true，发生重新渲染，false组件不会发生重新渲染
  shouldComponentUpdate(){
    console.log(777)
    return true;
  }
  //当数据更改，会触发componentWillUpdate()和componentDidUpdate()函数
  componentWillUpdate(){
    console.log(333)
  }
  componentDidUpdate(){
    console.log(444)
  }
  // 挂载组件时创建定时器
  componentDidMount(){
    console.log(555)
    this.timerID = setInterval(
      () => this.tick(),
      1000);
  }
  //当父元素不需要子组件时就会触发卸载，触发componentWillUnmount函数
  componentWillUnmount(){
    console.log(666)
    clearInterval(this.timerID);
  }
  render(){
    return (
      <div>
        <div>欢迎 {this.props.name}</div>
       <FormattedDate date = {this.state.date}></FormattedDate>
      </div>
    )
  }
}

export default Clock;