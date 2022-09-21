import { useEffect } from 'react'
import { useState } from 'react'
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
    setStudents(previousState => [...previousState, newStudent])
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
  return (
    <div className='container'>
      <header>
        <h1>Attendace List</h1>
        <div>
          <p>{user.name}</p>
          <img src={user.avatar} alt="Foto do usuario" />
        </div>
      </header>
      <input 
      type="text" 
      placeholder="Digite o nome..."
      onChange={event => setStudentName(event.target.value)}
      />
      <button className='add' type="button" onClick={addNewStudent}>Adicionar</button>
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