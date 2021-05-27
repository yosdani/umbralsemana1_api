const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;



const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");

exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");

};

exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");


};

exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content.");
};

exports.showUser=(req,res)=> {

    User.findOne({
        where: {
            id: req.body.id
        }
    })
        .then(user => {
                if (!user) {
                    return res.status(404).send({message: "User Not found."});
                }
                else {

                    return res.status(200).send({name:user.name});
                }

            }
        )


};

exports.getAllUser=(req,res)=> {

    User.findAll({

    })
        .then(user => {
                if (!user) {
                    return res.status(404).send({message: "User Not found."});
                }
                else {

                    return res.status(200).send({user});
                }

            }
        )


};

