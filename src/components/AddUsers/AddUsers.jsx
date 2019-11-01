import React from 'react'
import s from './AddUsers.module.css'
import {addTextAC} from "../../store/user-reducer";

const AddUsers = (props) => {
  let nameProduct = React.createRef();
  
  let info = {
    name: '',
    country: '',
    state: ''
  };
  
  //let priceProduct = React.createRef();
  //let descriptionProduct = React.createRef();

  let fieldChange = (event) => {
    debugger
    info[event.target.name] = event.target.value
  };
  
  let addNewUser = () => {
    debugger
    let text = nameProduct.current.value;
    props.changeText(text)
    return text
  }


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

export default AddUsers;