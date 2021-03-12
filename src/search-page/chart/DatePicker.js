import React, { Component } from 'react'

import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

export default class Calendar extends Component {
    render() {
        return (
            <div>
                <form onSubmit={ this.props.onSubmit }>
                        <div className="form-group">
                        <DatePicker
                            selected={this.props.selected}
                            onChange={ this.props.onChange }
                            dateFormat="MMMM d, yyyy"
                            />
                        <button className="btn btn-primary">Update Graph</button>
                        </div>
                    </form>
            </div>
        )
    }
}
