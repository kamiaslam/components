import React, { Component } from 'react';

import Button from 'grommet/components/Select';
import { Select } from 'glamorous';

export default class CSelect extends Component {
    render() {
        const { children, onClick, color } = this.props;

        return (
            <Select placeHolder='None'
                multiple={false}
                inline={true}
                onSearch={false}
                options={['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']}
                value='three'
                className="sample"
                style={{ width: "300px" }}
                onChange={() => { }} />
        );
    }
}
