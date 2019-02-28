import React, {Component} from 'react'
import Nav from '../Home/Nav'
import Axios from 'axios';
import Faqcs from './Faqcs.scss'

class Faq extends Component{
    constructor(props){
        super(props)
        this.state = {
            questions: [],
            questionInput: '',
            answerInput: '',
            editItem: false
           
        }
    }
    handleAnswerInput = (val) => {
        this.setState({
            answerInput: val
        })
       
    }

    handleQuestionInput = (val) => {
        this.setState({
            questionInput: val
        })
    }
    handleClick() {
        this.setState({ editItem: !this.state.editItem })
      }
    
    handleChange(prop, val){
        this.setState({
            [prop]: val
        })
    }
    getQuestions(){
        Axios.get('/api/faq')
        .then( res => {
            console.log(res.data)
            
            this.setState({
                questions: res.data,
                answerInput: '',
                questionInput: '',
                editItem: false

            })
            return this.questions
        })
    }
    componentDidMount(){
        this.getQuestions()
    }

    addQuestions = () => {
        const {questionInput} = this.state;
        
        Axios.post('/faq/addquestion', {questionInput})
        .then(res => {
            console.log(res)
            // this.setState({
            
            //     questions: res.data
            // })
            this.getQuestions()
            
        })
        
    }
    addAnswer = (id) => {
        const {answerInput} = this.state;

        Axios.put(`/api/faq/${id}/edit`, {answerInput})
        .then(res => {
            console.log('update complete')
            console.log(res)
            this.getQuestions()
        })
        
    }
    
    deleteQuestions = (id) => {
    
        Axios.delete(`/api/faq/${id}`)
        .then(res => {
            console.log('message deleted')
            console.log(res)
           this.getQuestions()
        })
    }
    // I am working on getting my input to match the function when I use it
    
    render(){
        const mappedQuestions = this.state.questions.map((question,i) => {
            
        
            return(
                <div>
                    
                    <h3 className='questions'>{question.question_name}</h3>
                    <h4 className='questions'>{question.question_asked}</h4>
                    <p className='questions' >{question.answer}</p>
                    {!this.state.editItem ?
                    <button onClick={() => this.handleClick()}>Edit</button> :
                    <div>
                        <button  onClick={() => this.deleteQuestions(question.questions_id)}>delete</button>
                        <input onChange={(e) => {this.handleAnswerInput(e.target.value)}}
                        type='submitbox'
                        ></input>
                        <button onClick={()=> this.addAnswer(question.questions_id)}>add answer</button>
                        
                    </div>}
                    
                </div>
                
            )
        })
        return(
            <div>
            
            <Nav />
            
            
                <h1>FAQ</h1>
                <img src='https://lokua.org/wp-content/uploads/2018/11/colorful-world-map4WEB.jpg' className='backimg'></img>
            <h1>FAQ</h1>
            <div>
            <input onChange={(e) => {this.handleQuestionInput(e.target.value)}}
            type='text'
            value={this.state.questionInput}
            placeholder='Ask here!'>
            </input>
            <button onClick={this.addQuestions}>Ask a question!</button>
            
            {mappedQuestions}
            </div>
        </div>
        )
    }
}
export default Faq