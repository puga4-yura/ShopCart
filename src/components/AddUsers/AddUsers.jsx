import React from 'react'
import s from './AddUsers.module.css'
import {addTextAC} from "../../store/user-reducer";
import {
    withRouter
} from 'react-router-dom'
const AddUsers = (props) => {
  let nameProduct = React.createRef();
  
  let textInfo = {
    id: null,
    name: '2332',
    country: '',
    state: ''
  };
  
  //let priceProduct = React.createRef();
  //let descriptionProduct = React.createRef();

  let fieldChange = (event) => {
    textInfo[event.target.name] = event.target.value
  };
  
  let addNewUser = () => {
      console.log(textInfo)
     props.changeText(textInfo)
      props.history.push('/users/');
    // return text
  };


  return (
   <div className={s.container}>
     <div  className={s.wrap}>
       <div className={s.title}>
         <div>Выбирете картинку</div>
         <input type="file"/>
       </div>
       <button onClick={addNewUser} className={s.addBtn}>Добавить новый новар</button>
     </div>

     <div>
       <div className={s.title}>Имя</div>
       <input type="text" placeholder="Имя" name='name' onChange={fieldChange} />
     </div>
     <div>
       <div className={s.title}>Страна</div>
       <input type="text" placeholder="Страна" name='country' onChange={fieldChange} />
     </div>
     <div>
       <div className={s.title}>Статус</div>
       <input type="text" placeholder="Статус" name='state' onChange={fieldChange} />
     </div>
   </div>
  )
}

export default withRouter(AddUsers);