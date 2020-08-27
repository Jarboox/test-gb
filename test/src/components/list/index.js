import React, { useState, useEffect } from 'react';
import './list.css';
import Api from '../../services/api';

import Register from '../register/register';

export default (props) => {

    const [list, setList] = useState([]);
    const [updateList, setUpdateList] = useState(false);
    const [editUser, setEditUser] = useState(false);

    useEffect(() => {

        Api.list().then(data => {
            setList(data.data);
        }).catch(error => {
            console.log(error);
        });

    }, [updateList]);


    function _deleteUser(userId) {
        Api.delete(userId).then(data => {
            if (!data.data.error) {
                var filter = list.filter(function(value, index, arr) {
                    return value._id !== userId;
                });
                setList(filter);
            }
        }).catch(error => {
            console.log(error);
        });
    }

    function _renderList() {
        if (list.length > 0) {
            return list.map((item) => {
                return(<div className="user-list" key={item._id}>
                    <label><b>Nombre:</b> {item.name}</label>
                    <label><b>Genero:</b> {item.gender}</label>
                    <label><b>Fecha de nacimiento:</b> {item.bDate}</label>
                    <button onClick={() => {
                        _deleteUser(item._id);
                    }}>
                        Eliminar
                    </button>
                    <button onClick={() => {
                        setEditUser(true);
                    }}>
                        Editar
                    </button>
                    
                    {editUser && <Register user={item} edit={true} />}
                    
                </div>)
            });
        } else {
            return(<div key="-1">Sin usuarios</div>)
        }
    }

    return(<div>
        {_renderList()}
    </div>)


}