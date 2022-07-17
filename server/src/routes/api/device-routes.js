const router = require('express').Router();
const { Device, User } = require('../../../models');

router.get('/', (req, res) => {
  Device.findAll({
    attributes: [
      'id', 
      'name', 
      'number'
    ],
    order: [['id', 'DESC']],
    include: [
      {
        model: User,
        attributes: ['username', 'id']
      }
    ]
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Device.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
        'id', 
        'name', 
        'number'
    ],
    include: [
      {
        model: User,
        attributes: ['username', 'id']
      }
    ]
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: `No posts found with id ${req.params.id}` });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  // { "name": "Prius", "device": "1234" }

  Device.create({
    name: req.body.name,
    number: req.body.number,
    user_id: req.session.user_id
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  Device.update(
    {
        name: req.body.name,
        number: req.body.number,
        user_id: req.session.user_id
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: `No posts found with id ${req.params.id}` });
        return;
      }
      res.json({ message: `Post ${req.params.id} updated`});
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  Device.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: `No posts found with id ${req.params.id}` });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;