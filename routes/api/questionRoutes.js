const router = require('express').Router();
const {
    getQuestions,
    getSingleQuestion,
    createQuestion,
    deleteQuestion,
    updateQuestion
} = require('../../controllers/question-controller');
      
      // /api/Questions
router.route('/').get(getQuestions).post(createQuestion);
      
      // /api/Questions/:QuestionId
router.route('/:questionId').get(getSingleQuestion).delete(deleteQuestion);
router.route('/questionId').put(updateQuestion);

module.exports = router;
