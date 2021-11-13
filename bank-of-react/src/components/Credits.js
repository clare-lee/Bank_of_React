import React, {Component} from 'react';
import { Link } from 'react-router-dom'

class Credits extends Component {
    tableRow (data) {
        return (<tr><td>{data.date}</td> <td>{data.description}</td> <td>{data.amount}</td> </tr>)
    } 
    render() {
        let rows = []
        for (let i =0; i<this.props.credits.length; i++) {
            rows.push(this.tableRow(this.props.credits[i]))
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
            </div>
        );
    }
}

export default Credits