
import { useState } from 'react';
import './App.css';
import questions from './data.js'
import SingleQuestion from './SingleQuestion';

function App() {

  const [questionsItems,setQuestionItems] = useState(questions)
  console.log(questions)

  return (
    <main>
      <div className='container'>
        <h3>Questions and Answers About Login</h3>
        <section className='intro'>
            {
              questions.map(question => <SingleQuestion key={question.id} {...question} /> )
              // questions.map(question => <SingleQuestion key={question.id} title = {question.title} info = {question.info} /> )
            }
        </section>
      </div>
    </main>
  );
}

export default App;
