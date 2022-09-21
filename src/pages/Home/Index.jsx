import { Card } from '../../components/Card/Index'
import './styles.css'

export function Home() {
 
  return (
    <div className='container'>
      <h1>Attendace List</h1>
      <input type="text" placeholder="Digite o nome..."/>
      <button type="button">Adicionar</button>

      <Card name='Vinicius' time='12:10'/>
      <Card name='Aline' time='16:50'/>
      <Card name='Mariana' time='13:30'/>
      <Card name='Emanuel' time='09:20'/>
    </div>
  )
}