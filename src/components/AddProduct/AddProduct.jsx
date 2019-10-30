import React from 'react'
import s from './AddProduct.module.css'

const AddProduct = () => {
  let nameProduct = React.createRef();
  let priceProduct = React.createRef();
  let descriptionProduct = React.createRef();

  let textNameChange = () => {
    //debugger
    let text = nameProduct.current.value;
    //props.changeText(text)
    console.log(text)
  };

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
       <button className={s.addBtn}>Добавить новый новар</button>
     </div>

     <div>
       <div className={s.title}>Добавить имя товара</div>
       <input type="text" placeholder="Имя товара" onChange={textNameChange} ref={nameProduct}/>
     </div>
     <div>
       <div className={s.title}>Добавить Цену товара</div>
       <input type="text" placeholder="Имя товара"  ref={priceProduct}/>
     </div>
     <div>
       <div className={s.title}>Добавить иписание товара</div>
       <input type="text" placeholder="Имя товара"  ref={descriptionProduct}/>
     </div>
   </div>
  )
}

export default AddProduct;