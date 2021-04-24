import React, { Component } from 'react'
import DataTable from 'react-data-table-component';

const data = [{ id: 1, title: 'Conan the Barbarian', year: '1982' } ];
const columns = [
  {
    name: 'Title',
    selector: 'title',
    sortable: true,
  },
  {
    name: 'Year',
    selector: 'year',
    sortable: true,
    right: true,
  },
];


export default class Transaction extends Component {
    render() {
        return (
            <div>
                <DataTable
        title="Arnold Movies"
        columns={columns}
        data={data}
      />
            </div>
        )
    }
}
