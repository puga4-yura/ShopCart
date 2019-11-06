import React from 'react'
import s from './AddUsers.module.css'
import {addTextAC} from "../../store/user-reducer";
import {withRouter} from 'react-router-dom'
const AddUsers = (props) => {
  debugger;
  console.log(props)
  let textInfo = {
    id: null,
    photo: '',
    name: '2332',
    state: '',
    country: ''
  };
  

  let fieldChange = (event) => {
    textInfo[event.target.name] = event.target.value
  };
  
  let addNewUser = () => {
      console.log(textInfo)
      props.changeText(textInfo)
      props.history.push('/users/');
  };


  return (
   <div className={s.container}>
     <form action="">
       <div  className={s.wrap}>
         <div className={s.title}>
           <div>Выбирете картинку</div>
           <input name='photo' type="file"/>
         </div>
         <button onClick={addNewUser} className={s.addBtn}>Добавить новый новар</button>
       </div>
       <div>
         <div className={s.title}>Имя</div>
         <input type="text" placeholder="Имя" name='name' onChange={fieldChange} />
       </div>
       <div>
         <div className={s.title}>Статус</div>
         <input type="text" placeholder="Статус" name='state' onChange={fieldChange} />
       </div>
       <div>
         <div className={s.title}>Страна</div>
         <input type="text" placeholder="Страна" name='country' onChange={fieldChange} />
       </div>
       
       
     </form>
   </div>
  )
}

export default withRouter(AddUsers);