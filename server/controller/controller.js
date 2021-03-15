import Userdb from "../model/model.js";

// create and save new user
export const create = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content cannot be empty" });
    return;
  }
  // new user
  const user = new Userdb({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    status: req.body.status,
  });

  user
    .save(user)
    .then((data) => {
      res.redirect("/");
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

// retrive and return all users or single user
export const find = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;

    Userdb.findById(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: "user not defined" });
        } else {
          res.send(data);
        }
      })
      .catch((e) => {
        res.send({ message: e.message });
      });
  } else {
    Userdb.find()
      .then((user) => {
        res.send(user);
      })
      .catch((e) => {
        res.status(500).send({ message: err.message });
      });
  }
};

// update the user by id
export const update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: err.message });
  }

  const id = req.params.id;
  Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: err.message });
      } else {
        res.send(data);
      }
    })
    .catch((e) => {
      res.status(500).send({ message: err.message });
    });
};

// Delete a user with ID
export const deleteUser = (req, res) => {
  const id = req.params.id;

  Userdb.findByIdAndDelete(id, req.body)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: err.message });
      } else {
        res.send({ message: "user was deleted" });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
