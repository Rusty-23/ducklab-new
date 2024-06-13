const express = require("express");
const db = require("../service/db");
const router = express.Router();

router.get("/", async function (req, res, next) {
    const prof = req.query.prof;
    if (!prof) {
        res.status(400).json({ error: "prof is required" });
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

router.post("/", async function (req, res, next) {
    const { name, slug, description, image_source, preview_image, duration, year_level, prof } = req.body;
    if (!name || !slug || !description || !image_source || !preview_image || !duration || !year_level || !prof) {
        res.status(400).json({ error: "name, slug, description, image_source, preview_image, duration, year_level, and prof are required" });
        return;
    }
    const [row] = await db.query(`
        INSERT INTO 
          subjects (
            name,
            slug,
            description,
            image_source,
            preview_image,
            duration,
            year_level,
            prof
          ) VALUES (
           '${name}',
           '${slug}',
           '${description}',
           '${image_source}',
           '${preview_image}',
           '${duration}',
           '${year_level}',
           '${prof}'
          )
    `);
    res.json(row);
});

router.get("/:slug", async function (req, res, next) {
    const slug = req.params.slug;
    const prof = req.query.prof;

    if (!slug || !prof) {
        res.status(400).json({ error: "slug and prof are required" });
        return;
    }
    const [row] = await db.query(
        `SELECT * FROM subjects WHERE slug = '${slug}' AND prof = '${prof}'`
    );
    res.json(row);
});

router.get("/:slug/lectures", async function (req, res, next) {
    const slug = req.params.slug;
    const prof = req.query.prof;

    if (!slug || !prof) {
        res.status(400).json({ error: "slug and prof are required" });
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
      subjects.prof = '${prof}'`;
    const [row] = await db.query(query);
    res.json(row);
});

router.get("/:slug/questions", async function (req, res, next) {
    const slug = req.params.slug;

    if (!slug) {
        res.status(400).json({ error: "slug is required" });
        return;
    }

    const query = `
    SELECT
      questions.id,
      questions.question,
      questions.choice_1,
      questions.choice_2,
      questions.choice_3,
      questions.choice_4
    FROM questions
    LEFT JOIN subjects ON questions.subject_id = subjects.id
    WHERE subjects.slug = '${slug}'`;
    const [row] = await db.query(query);
    res.json(row);
});

router.post("/:slug/questions/result", async function (req, res, next) {
    const slug = req.params.slug;
    const { user_id: userId, ...choices } = req.body;

    if (!slug || !userId) {
        res.status(400).json({ error: "slug and user_id are required" });
        return;
    }

    let query = `
    SELECT
      questions.subject_id,
      questions.id,
      questions.answer
    FROM questions
    LEFT JOIN subjects ON questions.subject_id = subjects.id
    WHERE subjects.slug = '${slug}'`;
    const [answers] = await db.query(query);

    let correctAnswer = 0;
    for (let i = 0; i < answers.length; i++) {
        const answer = answers[i];
        Object.entries(choices).forEach(([key, value]) => {
            if (
                key.replace("__answer__", "") === answer.id.toString() &&
                value === answer.answer
            ) {
                correctAnswer++;
            }
        });
    }

    const score = (correctAnswer / answers.length) * 100;

    query = `
      UPDATE
        enrolled_subjects
      SET
        exam_score = ${score}
      WHERE
        user_id = '${userId}'
      AND subject_id = '${answers[0].subject_id}'
    `;
    const [row] = await db.query(query);
    console.log(row);   

    res.json({
        score,
    });
});

module.exports = router;
