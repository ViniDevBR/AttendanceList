import { useEffect, useState } from 'react'
import { Card } from '../../components/Card/Index'
import './styles.css'

export function Home() {
  const [studentName, setStudentName] = useState('')
  const [students, setStudents] = useState([])
  const [user, setUser] = useState({
    name: '',
    avatar:''
  })
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
    if (!studentName){
      return
    }
    setStudents(previousState => [...previousState, newStudent])
    setStudentName('')
  }
  useEffect(() => {
    const url = 'https://api.github.com/users/vinidevbr'
    fetch(url)
    .then(response => response.json())
    .then(data => {
      setUser({
        name: data.name,
        avatar: data.avatar_url
      })
    })
  },[])

  function removeStudent(studentID) {
    const removedStudent = students.filter(student => student !== studentID)
    
    setStudents(removedStudent)
  }
 
  return (
    <div className='container'>
      <header>
        <h1>Attendace List</h1>
        <div className='infos'>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="Foto do usuario" />
        </div>
      </header>
      <input 
      type="text" 
      placeholder="Digite o nome..."
      value={studentName}
      onChange={event => setStudentName(event.target.value)}
      />
      <button className='add' type="button" onClick={addNewStudent}>Adicionar</button>
      {
        students.map(student =>( <Card 
          key={student.id}
          name={student.name} 
          time={student.time}
          onCLick={console.log('clicado')}
          />
        ))
      } 
    </div>
  )
}
// () => removeStudent(student.id)