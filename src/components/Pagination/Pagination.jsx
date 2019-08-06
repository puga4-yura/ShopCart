import React from "react"
import s from "./Pagination.module.css"

//res =  counr / 4
const Pagination = (props) =>{
  let numberItem =  props.item.length
  let pageCount =  Math.ceil(numberItem / 4);

  let pages =[];

  for(let i = 1; i <= pageCount; i ++ ) {
    pages.push(i)
  }

  console.log(pages)
  return (
    <div>
      {pages.map((page) => {
        return <span className={s.active}>{page}</span>
      })}
    </div>
  )
}


export default Pagination ;