import React from 'react'
import s from './AddUsers.module.css'
import {addTextAC} from "../../store/user-reducer";
import {withRouter} from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'


const AddUsers = (data) => {
  const props = data.allData
  
  let textInfo = data.textInfo
  let addNewUser = () => {
    props.changeText(textInfo)
    props.history.push('/users/');
  };
  
  let fieldChange = (event) => {
    data.fieldChange(event)
  };
  
  return (
    <div className={s.container}>
      <form action="">
        <div className={s.wrap}>
          <div className={s.title}>
            <div>Выбирете картинку</div>
            <input name='photo' type="file"/>
          </div>
          <button onClick={addNewUser} className={s.addBtn}>Добавить новый новар</button>
        </div>
        <div>
          <div className={s.title}>Имя</div>
          <Field type="text" placeholder="Имя" component={'input'} name='name' />
        </div>
        <div>
          <div className={s.title}>Статус</div>
          <input type="text" placeholder="Статус" component={'input'} name='state' />
        </div>
        <div>
          <div className={s.title}>Страна</div>
          <select className={s.select} name="country" id="" onChange={fieldChange}>
            <option></option>
            /*Object.keys(countries).map*/
            {Object.keys(props.UserInfo.countries).map((countryId) => {
                const country = props.UserInfo.countries[countryId];
                return <option id={countryId} value={countryId}>{country}</option>
              }
            )}
          
          </select>
        </div>
        <div>
          <div className={s.title}>Город</div>
          <select className={s.select} name="city" id="" onChange={fieldChange}>
            <option></option>
            {Object.keys(data.cities)
              .map((cityId) => {
                  const city = data.cities[cityId];
                  return <option id={cityId} value={cityId}>{city.name}</option>
                }
              )}
          </select>
        </div>
      </form>
    </div>
  )
}

const LoginFormRedux = reduxForm({form: 'addUser'})(AddUsers)


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
  
  textInfo = {
    country: '',
    city: '',
    id: null,
    photo: '',
    name: '',
    state: '',
    
  };
  
  
  fieldChange = (event) => {
    const name = event.target.name;
    this.textInfo[event.target.name] = event.target.value;
    console.log(this.textInfo)
    const value = event.target.value;
    if (name === 'country') {
      this.currenrCountryId = value;
      this.changeCity(value)
    }
  };
  
  render() {
    return (
      <LoginFormRedux
        textInfo={this.textInfo}
        fieldChange={this.fieldChange.bind(this)}
        cities={this.state.cities}
        allData={this.props}/>
    )
    
  }
}

export default withRouter(AddUsersClass);