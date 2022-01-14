import * as React from "react"

class Time extends React.Component{
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
      }
    
      componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
    
      componentWillUnmount() {
        clearInterval(this.timerID);
      }
    
      tick() {
        this.setState({
          date: new Date()
        });
      }
    
      render() {
        return (
          <div className="m-auto">
            <p className="m-auto">{this.state.date.toLocaleTimeString()}</p>
          </div>
        );
      }
  }
  
  export default Time