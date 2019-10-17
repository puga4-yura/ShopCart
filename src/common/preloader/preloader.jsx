import React from 'react'
import preloader from "../../assets/images/preloader.gif";
import s from "./preloader.module.css";
import Pagination from "../../components/Pagination/Pagination";


let Preloader = () => {
  return (
    <img className={s.preloader} src={preloader}/>
  )
}

export default Preloader ;


