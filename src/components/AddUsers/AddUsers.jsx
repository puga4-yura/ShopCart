import React from 'react'
import s from './AddUsers.module.css'
import {addTextAC} from "../../store/user-reducer";
import {withRouter} from 'react-router-dom'
const AddUsers = (props) => {
 debugger
  let textInfo = {
    id: null,
    photo: '',
    name: '',
    state: '',
    country: '',
    city: '',
  };
console.log(textInfo)

  let fieldChange = (event) => {
    textInfo[event.target.name] = event.target.value;
    let id = event.target.getElementById;
    console.log(id)
  };

  let addNewUser = () => {
      props.changeText(textInfo)
      props.history.push('/users/');
  };

  // componentDidUpdate(props){
  //   console.log(props.state)
  // }
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
         <select  className={s.select} name="country" id="" onChange={fieldChange}>
           /*Object.keys(countries).map*/
           {props.UserInfo.countries.map((country) => {
             console.log(country.id)
             return <option id={country.id}>{country.country}</option>}
           )}

         </select>
       </div>
       <div>
         <div className={s.title}>Город</div>
         <select className={s.select} name="city" id="" onChange={fieldChange}>
           {props.UserInfo.cities.map((cities) => {
             return <option>{cities.name}</option>
           })}
         </select>
       </div>
     </form>
   </div>
  )


}

export default withRouter(AddUsers);