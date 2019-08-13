import React from "react"
import s from "./Pagination.module.css"

//res =  counr / 4
const Pagination = (props) => {
    const pageSize = 4;
    //props.onPaginationClick(0, pageSize);
    let numberItem = props.item.length;
    let pageCount = Math.ceil(numberItem / pageSize);

    let pages = [];

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    //console.log(pages)
    return (

        <div className={s.paginationContainer}>
            {pages.map((page) => {
                return <button className={s.paginationItem} onClick={() => props.onPaginationClick(page, pageSize)}>{page}</button>
                //return <button className={s.paginationItem} onClick={props.onPaginationClick.bind(this,page, pageSize)}>{page}</button>
            })}
        </div>
    )
}


export default Pagination ;