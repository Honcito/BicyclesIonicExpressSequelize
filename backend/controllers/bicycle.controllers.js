const { where } = require("sequelize");
const db = require("../models");
const Bicycle = db.bicycles;
const Op = db.Sequelize.Op;

//Create and Save a new Bicycle
exports.create = (req, res) => {
    // Validate request
    if(!req.body.brand) {
        res.status(400).send ({
            message: "Content can not be empty!"
        });

        return;
    }

    // Create a Bicycle
    const bicycle = {
        brand: req.body.brand,
        model: req.body.model
    };

    // Save Bicycle in the database
    Bicycle.create(bicycle)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the bicycle."
            });
        });
};

// Retrive all Bicycles from the database.
exports.findAll = (req, res) => {
    Bicycle.findAll()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving bicycles."
        });
    });

};

// Find a single Bicycle with an id
exports.findOne = (req, res) => {
   const id = req.params.id;

   Bicycle.findByPk(id)
    .then(data => {
        if(data) {
            res.send(data);
        } else {
            res.status(404).send({
                message: `Cannot find Bicycle with id?${id}.`
            });
        }
    })
    .catch(err =>{
        res.status(500).send({
            message: `Error retrieving Bicycle with id=${id}.`
        });
    });
};

// Update a Bicycle by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Bicycle.update(req.body, {
        where: { id: id}
    })
        .then(num => {
            if(num == 1) {
                res.send({
                    message: "Bicycle was updated successfully."
                });

            } else {
                res.send({
                    message: `Cannot update Bicycle with id=${id}. Maybe Bicycle was not found.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error updating Bicycle with id=${id}.`
            });
        });
};

// Delete a Bicycle with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Bicycle.destroy({
        where: { id: id}
    })

        .then(num => {
            if(num == 1) {
                res.send({
                    message: "Bicycle was deleted successfully."
                });
            } else {
                res.send({
                    message: `Cannot delete Bicycle with id=${id}. Maybe Bicycle was not found.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Could not delete Bicycle with id=${id}.`
            });
        });
};

// Delete all Bicycles from the database
exports.deleteAll = (req, res) => {
    Bicycle.destroy({
        where: {},
        truncate: false
    })

        .then(nums => {
            res.send({message: `${nums} Bicycles were deleted successfully.`});
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while removing all bicycles."
            });
        });
}
