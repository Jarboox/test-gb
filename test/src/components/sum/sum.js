import React, { useState } from 'react';
import Api from '../../services/api';

export default (props)  => {

    const [index, setIndex] = useState(-1);
    const [arrayString, setArrayString] = useState('');

    function _getIndex() {
        Api.index(arrayString).then(data => {
            setIndex(data.data.pIndex);
        }).catch(error => {
            console.log(error);
        });
    }
    
    return(<div>
        <label>Array</label>
        <input type="text" value={arrayString} onChange={(e) => {
            setArrayString(e.target.value)
        }} />
        <button onClick={() => {
            _getIndex();
        }}>
            Calcular
        </button>
        <br/>
        <label>Index: {index} </label>
    </div>)

}