const ArticleSchema = require('../models/article');

const controllers = {
  getAll: async (req, res) => {
    const articles = await ArticleSchema.find();
    res
      .status(200)
      .json({ success: true, message: 'Showing articles', data: articles });
  },
  get: async (req, res) => {
    const { id } = req.params;
    const article = await ArticleSchema.findById(id);
    res
      .status(200)
      .json({ success: true, message: 'Showing article ' + id, data: article });
  },
  create: async (req, res) => {
    try {
      const article = await ArticleSchema.create(req.body);

      res.status(201).json({
        success: true,
        message: 'Creating article ' + article.name,
        data: article,
      });
    } catch (error) {
      console.error('An error ocurred');
      res.status(400).json({ success: false, message: 'Check body data' });
    }
  },
  update: (req, res) => {
    const { name } = req.body;
    res.status(200).json({
      success: true,
      message: 'Updating article ' + req.params.id + ' with name ' + name,
    });
  },
  delete: (req, res) => {
    res
      .status(200)
      .json({ success: true, message: 'Deleting article ' + req.params.id });
  },
};

module.exports = controllers;
