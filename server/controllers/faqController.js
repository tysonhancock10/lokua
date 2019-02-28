module.exports = {
    
    getQuestions: (req, res) => {
        const db = req.app.get('db');
        
        db.faq.get_questions()
        .then( questions => res.status(200).send( questions ))
        .catch(err => {res.status(500).send({errorMessage: 'Oops wrong doing is happening'})
    })
    },

    addQuestion: async (req, res) => {
        
        const {questionInput} = req.body
        const {session} = req
        
        const db = req.app.get('db')
        let newQuestion = await db.faq.add_question({question_asked: questionInput});
        console.log(newQuestion)
        newQuestion = newQuestion[0]
        session.newQuestion = newQuestion
        console.log(session.newQuestion)
        

        res.status(200).send(session.newQuestion)
    },
    deleteQuestion: async (req, res) => {
        const db = req.app.get('db');
        
        
        
        db.faq.delete_question( [req.params.index])
        .then( () => res.sendStatus(200) )
        .catch( err => {
          res.status(500).send({errorMessage: "why do I keep changing these things."});
          console.log(err)
        } );
    },
    answerQuestion: async (req, res) => {
       
        const {answerInput} = req.body
        const {session} = req
        
        
        const db = req.app.get('db')
        
        let newAnswer = await db.faq.update_answer( {answer: answerInput, index: req.params.index} )
        
        newAnswer = newAnswer[0]
        session.newAnswer = newAnswer

        res.status(200).send(session.newAnswer)
    }
}