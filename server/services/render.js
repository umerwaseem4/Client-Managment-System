import axios from "axios";

export const homeRoutes = (req, res) => {
  // make get request to api users
  axios
    .get("http://localhost:5000/api/users")
    .then((responce) => {
      res.render("index", { users: responce.data });
    })
    .catch((e) => console.log(e));
};

export const addUser = (req, res) => {
  res.render("add-user");
};

export const updateUser = (req, res) => {
  axios
    .get("http://localhost:5000/api/users", {
      params: { id: req.query.id },
    })
    .then((responce) => {
      res.render("update-user", { user: responce.data });
    })
    .catch((e) => console.log(e));
};
