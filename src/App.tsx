import { useState } from 'react'
import './App.css'
import WorkTitle from './components/WorkTitle';


function App() {

  const [title, setTitle] = useState('');
  const [workList, setWorkList] = useState<any>([]);


  const handleChange = (e: any) => {
    setTitle( e.target.value)

  }


  const handleSubmit = () => {
    setWorkList([...workList, title])
    setTitle('')

  }

  return (
    <>
      <div>
        <h1>Todo List</h1>
        <input type="text" value={title} name="" id="" onChange={(e) => handleChange(e)} style={{marginRight:"20px"}} />
        <button onClick={handleSubmit}>Submit</button>
        {
          workList && workList.map((list: any) => (
            <WorkTitle title={list} setWorkList={setWorkList} workList={workList} />
          ))
        }
      </div>
    </>
  )
}

export default App
