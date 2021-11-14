import React, {Component} from 'react';
import { Link } from 'react-router-dom'

class Debits extends Component {
    render() {
        let tableRow = (data) => {
        return (<tr><td>{data.date}</td> <td>{data.description}</td> <td>{data.amount.toFixed(2)}</td> </tr>)
        } 
    
        let rows = []
        for (let i =0; i<this.props.debits.length; i++) {
            rows.push(tableRow(this.props.debits[i]))
        }
        return (
            <div>
                <Link to="/">Back Home</Link>
                <table class="table">
                    <thead>
                            <tr>
                                <th colSpan="3">
                                    <h2>Debits</h2>
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
                        <input ref={this.descriptionRef} placeholder="Debit Description" />
                    </label>
                    <button onClick={this.addDebit}>Add Debit</button>
                </div>
            </div>
        );
    }
}

export default Debits