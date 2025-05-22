var moment = require("moment");
const User = require("../models/customerSchema");
const router = require("../routes/allRoutes");

//how to Rename-Function👇
// jjj_kkk_www   👇 Explain how rename my function
// (Any-Name)_(file that make it Render)_(NameOfMyRequest)

const user_index_get = (req, res) => {
  // --- Explain User.find ==>>> To Get all Data
  // result ==>>> array of Object
  console.log("=============");
  User.find()
    .then((result) => {
      res.render("index", { arr: result, moment: moment });
    })

    .catch((err) => {
      console.log(err);
    });
};

// --- Explain User.findById ==>>> To Get Specific Data

const user_edit_get = (req, res) => {
  User.findById(req.params.id)
    // the result ===>>> this One Object only
    .then((result) => {
      res.render("user/edit", { obj: result, moment: moment });
    })
    .catch((err) => {
      console.log(err);
    });
};

const user_view_get = (req, res) => {
  User.findById(req.params.id)
    // the result ===>>> this One Object only
    .then((result) => {
      res.render("user/view", { obj: result, moment: moment });
    })
    .catch((err) => {
      console.log(err);
    });
};

// Search

const user_search_post = (req, res) => {
  console.log("mkmkmkmkmkmkmkmkmkkkkkkkk");

  const searchText = req.body.searchText.trim();

  User.find({ $or: [{ firestName: searchText }, { lastName: searchText }] })
    .then((result) => {
      console.log(result);
      res.render("user/search", { arr: result, moment: moment });
    })
    .catch((err) => {
      console.log(err);
    });
};

// To Remove Item we use "findByIdAndDelete"
// DELETE Request
const user_delete = (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

// Put Request ===>> To Edit Data
const user_put = (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body).then(() => {
    res.redirect("/");
  });
};

//this function to get Data
const user_add_get = (req, res) => {
  res.render("user/add");
};

//this function to post Request Or Post Data

const user_post = (req, res) => {
  User.create(req.body)
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  user_index_get,
  user_edit_get,
  user_view_get,
  user_search_post,
  user_delete,
  user_put,
  user_add_get,
  user_post,
};
