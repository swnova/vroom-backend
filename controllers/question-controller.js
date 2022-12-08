const router = require('express').Router();
const { Player, Game, Question } = require('../models');


module.exports = {
    // get all questions (get)
    getQuestions(req, res) {
        Question.find()
        .then((questions)=> res.json(questions))
        .catch((err)=> res.status(500).json(err));
    },
    // get one question (get)
    getSingleQuestion(req,res){
        Question.findOne({_id: req.params.questionId})
        .then((question)=>
        !question
            ?res.status(404).json({message: 'No question matches that ID.'})
            : res.json(question)
        )
        .catch((err)=> res.status(500).json(err));
    },
    createQuestion(req, res) {
        Question.create(req.body)
        .then((question)=> res.json(question))
        .catch((err)=> res.status(500).json(err));
    },
    deleteQuestion(req,res) {
        Question.findOneAndRemove({_id: req.params.questionId})
        .then((question)=>
            !question
            ? res.status(404).json({message: 'NO question with that ID.'})
            : res.json(question)
        )
        .catch((err)=> res.status(500).json(err));
    },
    updateQuestion(req, res){
        Question.findOneAndUpdate({_id: req.params.questionId},
            {$set: req.body},
            {runValidators: true, new: true}
            )
        .then((question)=>
            !question
            ? res.status(404).json({message: 'NO question with that ID.'})
            : res.json(question)
        )
        .catch((err)=> res.status(500).json(err));
    }
}


// get one question by id


// create question
// /api/question


// delete question


// update question