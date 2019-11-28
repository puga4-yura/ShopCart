import React from 'react'
import s from './AddUsers.module.css'
import {withRouter} from 'react-router-dom'
import { Field, reduxForm, formValueSelector,  FieldArray} from 'redux-form'
import {required, minLength} from  "../../common/validation/validation"

// деструктуризация
let minLength3 =  minLength(3)

// const AddUsers = (data) => {
//   const props = data.allData
//   console.log(props)
//   let textInfo = data.textInfo
//   let addNewUser = (value) => {
//     props.changeText(value)
//     props.history.push('/users/');
//   };
//
//   let fieldChange = (event) => {
//     data.fieldChange(event)
//   };
//
//   return (
//     <div className={s.container}>
//       <form onSubmit={props.handleSubmit}>
//         <div className={s.wrap}>
//           <div className={s.title}>
//             <div>Выбирете картинку</div>
//             <input name='photo' type="file"/>
//           </div>
//           <button onClick={addNewUser} className={s.addBtn}>Добавить новый новар</button>
//         </div>
//         <div>
//           <div className={s.title}>Имя</div>
//           <Field type="text" placeholder="Имя" component="input" name="name" />
//         </div>
//         <div>
//           <div className={s.title}>Статус</div>
//           <Field type="text" placeholder="Статус" component="input" name="state" />
//         </div>
//         <div>
//           <div className={s.title}>Страна</div>
//           <select className={s.select} name="country" id="" onChange={fieldChange}>
//             <option></option>
//             /*Object.keys(countries).map*/
//             {Object.keys(props.UserInfo.countries).map((countryId) => {
//                 const country = props.UserInfo.countries[countryId];
//                 return <option id={countryId} value={countryId}>{country}</option>
//               }
//             )}
//
//           </select>
//         </div>
//         <div>
//           <div className={s.title}>Город</div>
//           <select className={s.select} name="city" id="" onChange={fieldChange}>
//             <option></option>
//             {Object.keys(data.cities)
//               .map((cityId) => {
//                   const city = data.cities[cityId];
//                   return <option id={cityId} value={cityId}>{city.name}</option>
//                 }
//               )}
//           </select>
//         </div>
//       </form>
//     </div>
//   )
// }

const selectLocation = ({input, meta, ...props,}) => {

  return (
    <div>
      <div className={s.title}>Страна</div>
      <select {...props} {...input}>
       
        /*ObjectclassName={s.select}.keys(countries).map*/
        {Object.keys(props.UserInfo.countries).map((countryId) => {
            const country = props.UserInfo.countries[countryId];
            return <option id={countryId} value={countryId}>{country}</option>
          }
        )}

      </select>

      {/*<div className={s.title}>Город</div>*/}
      {/*<select className={s.select} name="city" id="" onChange={fieldChange}>*/}
      {/*  <option></option>*/}
      {/*  {Object.keys(data.cities)*/}
      {/*    .map((cityId) => {*/}
      {/*        const city = data.cities[cityId];*/}
      {/*        return <option id={cityId} value={cityId}>{city.name}</option>*/}
      {/*      }*/}
      {/*    )}*/}
      {/*</select>*/}
    </div>
  )
}

const AddUsers = (props) => {
    console.log(props)
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={s.wrap}>
        <div className={s.title}>
          <div>Выбирете картинку</div>
          <input name='photo' type="file"/>
        </div>
        <button className={s.addBtn}>Добавить новый новар</button>
      </div>
      <div>
        <div className={s.title}>Имя</div>
        <Field validate={[required]} type="text" placeholder="Имя" component="input" name="name"/>
      </div>
      <div>
        <div className={s.title}>Статус</div>
        <Field validate={[required, minLength3]} type="text" placeholder="Статус" component="input" name="state"/>
      </div>
      <div>
        <div className={s.title}>Страна</div>
        <Field component={selectLocation} />
      </div>
    </form>
  )
};

const LoginFormRedux = reduxForm({form: 'addUsers'})(AddUsers)


class AddUsersClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cities: Object.keys(props.UserInfo.cities)
        .filter(cityId => props.UserInfo.cities[cityId].country === this.currenrCountryId)
        .map(cityId => props.UserInfo.cities[cityId])
    }
  }
  
  currenrCountryId = 1;
  
  changeCity(currenrCountryId) {
    let newCities = {};
    Object.keys(this.props.UserInfo.cities)
      .filter(cityId => this.props.UserInfo.cities[cityId].country == currenrCountryId)
      .forEach(cityId => {
        newCities[cityId] = this.props.UserInfo.cities[cityId];
      });
    
    this.setState({cities: newCities})
    
  }
  
// textInfo = {
//     country: '',
//     city: '',
//     id: null,
//     photo: '',
//     name: '',
//     state: '',
//
//   };


  fieldChange = (event) => {
    const name = event.target.name;
    this.textInfo[event.target.name] = event.target.value;
    const value = event.target.value;
    if (name === 'country') {
      this.currenrCountryId = value;
      this.changeCity(value)
    }
  };

  addNewUser = (value) => {
     this.props.changeText(value)
     this.props.history.push('/users/');
  };
  
  render() {
    return (
      <LoginFormRedux
        onSubmit={this.addNewUser}
        textInfo={this.textInfo}
        fieldChange={this.fieldChange.bind(this)}
        cities={this.state.cities}
        allData={this.props}/>
    )
    
  }
}

export default withRouter(AddUsersClass);