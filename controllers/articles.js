const controllers = {
  getAll: (req, res) => {
    res.status(200).json({ success: true, message: 'Showing articles' });
  },
  get: (req, res) => {
    res
      .status(200)
      .json({ success: true, message: 'Showing article ' + req.params.id });
  },
  create: (req, res) => {
    const { id } = req.body;

    res.status(201).json({
      success: true,
      message: 'Creating article ' + id,
    });
  },
  update: (req, res) => {
    const { name } = req.body;
    res
      .status(200)
      .json({
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
