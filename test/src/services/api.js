import axios from 'axios';


const URL = "http://localhost:4001/api/user";
const URL_INDEX = "http://localhost:4001/api/sum";

class Api {

    constructor() {
        this._axios = axios.create();
        this._axios.defaults.timeout = 2000;
    }

    register(form) {
        delete form._id;
        return new Promise((resolve, reject) => {
            this._axios.post(URL, form).then(function(response) {
                console.log(response);
            }).catch(function(error) {
                console.log(error);
            });
        });
    };

    list() {
        return new Promise((resolve, reject) => {
            this._axios.get(URL).then(function(response) {
                resolve(response);
            }).catch(function(error) {
                reject(error)
            });
        });
    };

    delete(userId) {
        return new Promise((resolve, reject) => {
            this._axios.delete(URL + '/' + userId).then(function(response) {
                resolve(response);
            }).catch(function(error) {
                reject(error)
            });
        });
    }

    update(form) {
        return new Promise((resolve, reject) => {
            this._axios.put(URL + '/' + form._id, form).then(function(response) {
                resolve(response);
            }).catch(function(error) {
                reject(error)
            });
        });
    }

    index(arrayString) {
        return new Promise((resolve, reject) => {
            this._axios.post(URL_INDEX , {
                array: arrayString
            }).then(function(response) {
                resolve(response);
            }).catch(function(error) {
                reject(error)
            });
        });
    }

}

export default (new Api());