import './styles.css';
import { Trash } from 'phosphor-react'

export function Card(props) {
  return (
    <div className='card'>
      <strong>{props.name}</strong>
      <p>{props.time}</p>
      <button
      onClick={props.onClick}
      className='trash'>
        <Trash size={32}/>
      </button>
    </div>
  );
}