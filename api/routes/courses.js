const express = require('express');
const db = require('../service/db');
const router = express.Router();

router.get('/', async function(req, res, next) {
  const prof = req.query.prof;
  if (!prof) {
    res.status(400).json({ error: 'prof is required' });
    return;
  }
  const query = `
    SELECT 
      subjects.id,
      subjects.name,
      subjects.slug,
      COUNT(lectures.id) AS 'lecture_count',
      subjects.duration,
      subjects.year_level,
      subjects.description,
      subjects.image_source,
      subjects.preview_image,
      subjects.prof
    FROM subjects 
    LEFT JOIN lectures ON lectures.subject_id = subjects.id 
    WHERE prof = '${prof}' 
    GROUP BY 
      subjects.id,
      subjects.name,
      subjects.slug,
      subjects.description,
      subjects.image_source,
      subjects.prof,
      subjects.preview_image,
      subjects.duration,
      subjects.year_level`;
  const [row] = await db.query(query);
  res.json(row);
});

router.get('/:slug', async function(req, res, next) {
  const slug = req.params.slug;
  const prof = req.query.prof;

  if (!slug || !prof) {
    res.status(400).json({ error: 'slug and prof are required' });
    return;
  }
  const [row] = await db.query(`SELECT * FROM subjects WHERE slug = '${slug}' AND prof = '${prof}'`);
  res.json(row);
});

router.get('/:slug/lectures', async function(req, res, next) {
  const slug = req.params.slug;
  const prof = req.query.prof;

  if (!slug || !prof) {
    res.status(400).json({ error: 'slug and prof are required' });
    return;
  }
  const query = `
    SELECT
      lectures.*,
      subjects.name AS 'subject_name',
      subjects.duration AS 'subject_duration',
      subjects.year_level AS 'subject_year_level',
      subjects.slug AS 'subject_slug',
      subjects.description AS 'subject_description'
    FROM lectures
    INNER JOIN subjects ON subjects.id = lectures.subject_id
    WHERE
      subjects.slug = '${slug}'
    AND
      subjects.prof = '${prof}'`
  const [row] = await db.query(query);
  res.json(row);
});

module.exports = router;
