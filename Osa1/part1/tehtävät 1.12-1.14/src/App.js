import React, { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Display = (props) => {
  
  const votes = props.votes;
   
  console.log('Anecdote(', props.selected, ') has:', votes[props.selected],
  'votes' );

  return (
    <div>
     
      {props.anecdotes[props.selected]} <br/>
      has {votes[props.selected]} votes 
      
      
    </div>
  )
 

  };
  const DisplayAnecWithMostVotes = (props) => {
  
    const votes = props.votes;
    const idx = votes.indexOf((Math.max(...votes)))
  
    if(Math.max(...votes) === 0){
      return(
        <div>
          No votes yet!
        </div>
      )
    }
    return (
      <div>
       
        {props.anecdotes[idx]} <br/>
        has {votes[idx]} votes 
        
        
      </div>
    )
  };


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ];
  const [selected, setSelected] = useState(0);

  const [votes, setVotes] = useState([0,0,0,0,0,0,0]);

  const handleClick = () => {
    setSelected(Math.floor(Math.random() * 7))
  };

  const handleVoteClick = () => {
    const copy = [...votes]
    copy[selected] += 1 
    setVotes(copy)
    
  };

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <Display anecdotes={anecdotes} selected= {selected}
                votes={votes}/>
      
      <Button handleClick={handleVoteClick} text="vote" />
      <Button handleClick={handleClick} text="next anecdote" />
      
      <h2>Anecdote with most votes</h2>
      <DisplayAnecWithMostVotes anecdotes={anecdotes} 
                votes={votes} />
    </div>
  )
}

export default App