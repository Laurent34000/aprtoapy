import React, {Component} from 'react';


class ApyToApr extends Component {

  state = {
    yourapy:'',
    period: '',
    total:'',
  }


  handleApy = (e) => {

    this.setState({
      yourapy: (e.target.value)
    })
  }
  handlePeriod = (e) =>{

    this.setState({
      period: (e.target.value)
    })

  }

    exe = (e) => {
     e.preventDefault()
      this.setState({ 
    total:([Math.pow (1 + parseInt(this.state.yourapy)/100, 1/parseInt(this.state.period) ) -1] * [parseInt(this.state.period)*100] )

  })
  
  
}

    render() {

    return  (
    
      <div>
        <h1> Apy to Apr</h1>
        <form onSubmit={this.exe}>
              <div>
        <input type='text' value= {this.state.yourapy} onChange={this.handleApy}/> % APY <p>compounding</p>
              </div>

              <div>
        <select value={this.state.period} onChange={this.handlePeriod}>
              <option value=""></option>
              <option value= "1">annual</option>
              <option value="2">semestre</option>
              <option value="12">monthly</option>
              <option value="52">weekly</option>
              <option value="365">daily</option>

        </select> is
              </div>

              <div>
          <button type="submit">Enter</button>
              </div>
              </form>
            
             {isNaN(Number(this.state.total).toFixed(2)) ? ("0.00") : ((Number(this.state.total).toFixed(2)))} % APR
            
        </div>)}

    }
                
export default ApyToApr;