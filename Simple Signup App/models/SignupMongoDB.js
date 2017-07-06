/* 
 * Student Info: Name=Sujita Pokharel, ID=14105
 * Subject: CS557A_HW6_Spring_2016
 * Author: Suju
 * Filename: SignupMongoDB.js
 * Date and Time: Apr 9, 2016 3:14:47 PM 
 * Project Name: CS557_HW06_Spring2016 
 */

var crypto = require("crypto");
var client = require('mongodb').MongoClient;
var mongodb_host = "localhost";
var mongodb_port = "27017";
var collection;

module.exports = function () {
    connection = 'mongodb://';
    connection += mongodb_host + ':' + mongodb_port;
    connection += '/signup-express';
    client.connect(connection, function (err, database) {
        if (err) {
            throw new Error("Can't connect");
        } else {
            console.log("Connection to MongoDB server successful.");
            collection = database.collection('user');
        }
    });

//    return {
//        add: function (data, callback) {
//            var date = new Date();
//            data.id = crypto.randomBytes(20).toString('hex');
//            data.date = date.getFullYear() + "-" + date.getMonth() + "-" +
//                    date.getDate();
//            collection.insert(data, {}, callback || function () {});
//        },
//        update: function (data, callback) {
//            var ObjectID = require('mongodb').ObjectID;
//            data._id = new ObjectID(data._id); // wrap in ObjectID
//            collection.update(
//                    {id: data.id},
//                    data,
//                    {},
//                    function (err, count, status) {
//                        callback();
//                    }
//            );
//        },
//        get: function (callback) {
//            collection.find({}).toArray(function(err,items){
//                results = items; //Items is an array of the documents
//                callback(results);
//            });
//        },
//        remove: function (id, callback) {
//            collection.remove(
//                {id: id},{},
//                function (err, object) {
//                    callback();
//                }
//            );
//        }
//    };
};
