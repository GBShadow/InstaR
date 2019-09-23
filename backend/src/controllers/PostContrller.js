const Post = require("../models/Post");

module.exports = {
  async index(req, res) {
   // const posts = await Post.find();

   // return res.json(posts);
  },
  async store(req, res) {
    //const post = await Post.create(req.body);

    return res.json({ok: true});
  }
};
