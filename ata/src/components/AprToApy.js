import React, { Component } from 'react';




class AprToApy extends Component {

        state = {
            yourapr: "",
            period: "",
            total:"",

        }

        handleApr = (e) => {

           this.setState({
                yourapr: (e.target.value)

           })
        }

        handlePeriod = (e) => {

            this.setState({
                period: (e.target.value)
            })
        }

        exe = (e) => {
            e.preventDefault()
            this.setState({
                total:([Math.pow(1+((this.state.yourapr/100)/this.state.period),this.state.period)-1] * 100 )
                
            })
        }
    
    render() {
            return <div>
                <h1>Apr to Apy</h1>
                
                <form onSubmit={this.exe}> 
                <div>
                    <input type="text" value={this.state.yourapr} onChange={this.handleApr}></input> % APR <p>compounding</p>
                </div>
                <div> 
                    <select value={this.state.value} onChange={this.handlePeriod}>
                        <option value=""></option>
                        <option value="1">annualy</option>
                        <option value="2">semester</option>
                        <option value="12">monthly</option>
                        <option value="52">weekly</option>
                        <option value="365">daily</option>
                </select> is
                    
                </div>
                <div>
                    <button type="submit">Enter</button>
                </div> 
            {isNaN (Number(this.state.total).toFixed(2)) ? ("0.00") : (Number(this.state.total).toFixed(2))} % Apy

                </form> 

                </div>

    }
}

export default AprToApy;