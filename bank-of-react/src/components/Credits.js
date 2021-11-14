import React, {Component, createRef} from 'react';
import { Link } from 'react-router-dom'

class Credits extends Component {
    constructor (props) {
        super(props)
        this.amountRef = createRef()
        this.descriptionRef = createRef()
        
        this.addCredit = (event) => {
            event.preventDefault()
            let credit = {
                description: this.descriptionRef.current.value,
                amount: parseFloat(this.amountRef.current.value),
                date: new Date(Date.now()).toISOString()
            }
            this.props.addCredit(credit)
        }
    }
    render() {
        let tableRow = (data) => {
            return (<tr><td>{data.date}</td> <td>{data.description}</td> <td>{data.amount.toFixed(2)}</td> </tr>)
        } 
    
        let rows = []
        for (let i =0; i<this.props.credits.length; i++) {
            rows.push(tableRow(this.props.credits[i]))
        }
        return (
            <div>
                <Link to="/">Back Home</Link>
                <table class="table">
                    <thead>
                        <tr>
                            <th colSpan="3">
                                <h2>Credits</h2>
                            </th>
                        </tr>
                        <tr>
                            <th>Date</th>
                            <th>Description</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
                <div class="inputCell">
                    <label>
                        Amount: 
                        <input type="number" ref={this.amountRef} placeholder="$0.00" />
                    </label>
                    <label>
                        Description: 
                        <input ref={this.descriptionRef} placeholder="Credit Description" />
                    </label>
                    <button onClick={this.addCredit}>Add Credit</button>
                </div>
            </div>
        );
    }
}

export default Credits