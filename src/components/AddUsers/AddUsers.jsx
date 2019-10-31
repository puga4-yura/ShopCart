import React from 'react'
import s from './AddUsers.module.css'
import {addTextAC} from "../../store/user-reducer";

const AddUsers = (props) => {
  console.log(props)
  let nameProduct = React.createRef();
  //let priceProduct = React.createRef();
  //let descriptionProduct = React.createRef();

  // let textNameChange = () => {
  //   //debugger
  //   let text = nameProduct.current.value
  //
  //   console.log(text)
  // };
  
  let addNewUser = () => {
    debugger
    let text = nameProduct.current.value;
  
    props.changeText(text)
    return text
    //addPost(text);
   // props.changeText('');
    
  }
  
  //textNameChange(nameProduct);
  //textNameChange(priceProduct);
  //textNameChange(descriptionProduct);
  // let textNameChange = () => {
  //   debugger
  //   let text = nameProduct.current.value;
  //   //props.changeText(text)
  //   console.log(text)
  // };
  //
  // let textNameChange = () => {
  //   debugger
  //   let text = nameProduct.current.value;
  //   //props.changeText(text)
  //   console.log(text)
  // }

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
       <input type="text" placeholder="Имя"  ref={nameProduct}/>
     </div>
     <div>
       <div className={s.title}>Страна</div>
       <input type="text" placeholder="Страна" />
     </div>
     <div>
       <div className={s.title}>Статус</div>
       <input type="text" placeholder="Статус" />
     </div>
   </div>
  )
}

export default AddUsers;