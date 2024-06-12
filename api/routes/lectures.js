const express = require('express');
const db = require('../service/db');
const router = express.Router();

router.get('/', async function(req, res, next) {
  const prof = req.query.prof;
  if (!prof) {
    res.status(400).json({ error: 'prof is required' });
    return;
  }
  const [row] = await db.query(`SELECT lectures.*, subjects.name AS 'subject_name', subjects.year_level, subjects.slug AS 'subject_slug' FROM lectures LEFT JOIN subjects ON subjects.id = lectures.subject_id WHERE subjects.prof = '${prof}'`);
  res.json(row);
});

router.get('/:id', async function(req, res, next) {
  const id = req.params.id;
  const prof = req.query.prof;
  if (!prof) {
    res.status(400).json({ error: 'prof is required' });
    return;
  }
  if (!id) {
    res.status(400).json({ error: 'id is required' });
    return;
  }
  const query = `
  SELECT 
    lectures.*, 
    subjects.name AS 'subject_name',
    subjects.year_level,
    subjects.slug AS 'subject_slug'
  FROM lectures 
  LEFT JOIN subjects ON subjects.id = lectures.subject_id
  WHERE
    subjects.prof = '${prof}'
    AND lectures.id = '${id}'`
  const [row] = await db.query(query);
  res.json(row);
});

module.exports = router;
