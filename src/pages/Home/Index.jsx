import { useState } from 'react'
import { Card } from '../../components/Card/Index'
import './styles.css'

export function Home() {
  const [studentName, setStudentName] = useState('')
  const [students, setStudents] = useState([])
  const idNumber = Math.floor(Math.random() * 100) + 1; //1-100
  
  function addNewStudent(){
    const newStudent = {
      id: idNumber,
      name: studentName,
      time: new Date().toLocaleTimeString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    }
    setStudents(previousState => [...previousState, newStudent])
  }
  return (
    <div className='container'>
      <h1>Attendace List</h1>
      <input 
      type="text" 
      placeholder="Digite o nome..."
      onChange={event => setStudentName(event.target.value)}
      />
      
      <button type="button" onClick={addNewStudent}>Adicionar</button>
      {
        students.map(student =>( <Card 
          key={student.id}
          name={student.name} 
          time={student.time}
        />))
      }
      
    </div>
  )
}