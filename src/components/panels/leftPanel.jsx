import React, { Component } from 'react';
import GaugeChart from '../chart/gaugeChart'

class LeftPanel extends Component {
    state = {  } 
    render() { 
        return (
            <div className="col-md-4 left-panel">
                <h4 className="left-panel-title">شارژ باقی مانده سیمکارت</h4>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="co-md-8">
                        <GaugeChart />
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <button className="badge badge-warning"style={{width:'100%'}}>سیمکارتت رو شارژ کن!</button>
                        </div>
                        <div className="col-md-2"></div>
                </div>
            </div>
        );
    }
}
 
export default LeftPanel;