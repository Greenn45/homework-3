import React, {useState} from 'react';

const App = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addNewTask = () => {
    if(task) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

    return (
        <div className='app'>
          <div className='form'>
            <input type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder='Enter text'/>
            <button onClick={addNewTask}>Create task</button>
          </div>

          <div className='list'>
            {tasks?.map((task) => (
                <div>
                    <h4>Tasks</h4>
                    <div className='task'><span>Task:</span> {task}
                    </div>
                </div>
              ))}
          </div>
        </div>
    );
};

export default App;