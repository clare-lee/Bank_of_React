import React, {Component} from 'react';

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
                <table>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Credits