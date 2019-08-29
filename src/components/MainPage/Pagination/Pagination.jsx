import React from "react"
import s from "./Pagination.module.css"

const Pagination = (props) => {
    console.log(props)
    const pageSize = 4;
    let numberItem = props.store.length;
    console.log(numberItem)
    let pageCount = Math.ceil(numberItem / pageSize);

     let pages = [];
    
     for (let i = 1; i <= pageCount; i++) {
         pages.push(i)
     }

    return (

        <div className={s.paginationContainer}>
            {pages.map((page) => {
                return <button className={s.paginationItem} >{page}</button>
                //onClick={() => props.onPaginationClick(page, pageSize)}
            })}
        </div>
    )
}


export default Pagination ;