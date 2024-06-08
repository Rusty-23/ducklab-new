const express = require('express');
const db = require('../service/db');
const router = express.Router();

router.get('/', async function(req, res, next) {
  const prof = req.query.prof;
  if (!prof) {
    res.status(400).json({ error: 'prof is required' });
    return;
  }
  const [row] = await db.query(`SELECT * FROM subjects WHERE prof = '${prof}'`);
  res.json(row);
});

module.exports = router;
