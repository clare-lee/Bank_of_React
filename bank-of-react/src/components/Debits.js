import React, {Component} from 'react';

class Debits extends Component {
    tableRow (data) {
        return (<tr><td>{data.date}</td> <td>{data.description}</td> <td>{data.amount}</td> </tr>)
    } 
    render() {
        let rows = []
        for (let i =0; i<this.props.debits.length; i++) {
            rows.push(this.tableRow(this.props.debits[i]))
        }
        return (
            <div>
                <table>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Debits