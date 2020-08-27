const mongoose = require('mongoose');
const User = mongoose.model('users');

const API_URL = '/api/user';
const API_SUM = '/api/sum';
const ID_PREFIX = '/:id'
const BAD_REQUEST = 400;
const OK = 200;
const CREATED = 201;
const ACCEPTED = 202;

module.exports = (app) => {
 
    app.get(API_URL, async (req, res) => {
        let mFilter = {};
        let tasks = await User.find(mFilter);
        return res.status(OK).send(tasks);
    });

    app.post(API_URL, async (req, res) => {
        try {
            let user = await User.create(req.body);
            return res.status(CREATED).send({
                error: false,
                user
            });
        } catch (e) {
            return res.status(BAD_REQUEST).send({
                error: true,
                message: e.message
            });
        }
    });

    function sum(numbers) {
        return numbers.reduce(function(acc, current) {
            return acc + current;
        }, 0);
    }

    app.post(API_SUM, async(req, res) => {

        const mNumbers = req.body.array.split(',');
        const numbers = mNumbers.map((item) => {
            return parseInt(item.trim());
        });

        try {
            let pIndex = -1;
            //const numbers = [3, 2, 8, 5, 0];

            for (var i = 0; i < numbers.length; i++) {
                var leftSum = sum(numbers.slice(0, i));
                var rightSum = sum(numbers.slice(i + 1));
        
                if (leftSum === rightSum) {
                    pIndex = i;
                }
            }
        
            return res.status(CREATED).send({
                error: false,
                pIndex
            });

        } catch (e) {
            return res.status(BAD_REQUEST).send({
                error: true,
                message: e.message
            });
        }
    })

    app.put(API_URL + ID_PREFIX, async (req, res) => {
        const { id } = req.params;
        var data = req.body;
        try {
            _ = await User.findByIdAndUpdate(id, data);
            const user = await User.findById(id)
            return res.status(ACCEPTED).send({
                error: false,
                user
            });
        } catch(e) {
            return res.status(BAD_REQUEST).send({
                error: true,
                message: e.message
            });
        }
        
    });

    app.delete(API_URL + ID_PREFIX, async (req, res) => {

        const { id } = req.params;
        
        try {
            const user = await User.findByIdAndDelete(id);
            return res.status(ACCEPTED).send({
                error: false,
                user
            });
        } catch (e) {
            return res.status(BAD_REQUEST).send({
                error: true,
                message: e.message
            });
        }
    });

}