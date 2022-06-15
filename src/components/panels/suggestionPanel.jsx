import React, { Component } from 'react';

class SuggestionPanel extends Component {
    state = { 
        tb:[
            {id: 1, ex:'14 شهریور 1401', name: 'بسته اینترنت سه ماهه', off: '20%', price: '130,000'},
            {id: 2, ex:'12 خرداد 1401', name: 'بسته ترکیبی هفته ای', off: '45%', price: '45,000'},
            {id: 3, ex:'15 تیر 1401', name: 'بسته اینترنت یکماهه', off: '15%', price: '50,000'}
        ]
     } 
    render() { 
        return (
            <table class="table table-bordered table-text">
                            <thead>
                                <tr>
                                    <th scope="col">تاریخ انقضا</th>
                                    <th scope="col">نام بسته</th>
                                    <th scope="col">تخفیف</th>
                                    <th scope="col">قیمت</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.tb.map(dt => (
                                    <tr key={dt.id}>
                                        <td>{dt.ex}</td>
                                        <td>{dt.name}</td>
                                        <td>{dt.off}</td>
                                        <td>{dt.price}</td>
                                        <td className="table-Op-text"><button className="badge badge-warning">خرید</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
        );
    }
}
 
export default SuggestionPanel;