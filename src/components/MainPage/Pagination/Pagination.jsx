import React from "react"
import s from "./Pagination.module.css"

const Pagination = (props) => {
    const pageSize = 4;
    let numberItem = props.item.length;
    let pageCount = Math.ceil(numberItem / pageSize);

    let pages = [];

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return (

        <div className={s.paginationContainer}>
            {pages.map((page) => {
                return <button className={s.paginationItem} onClick={() => props.onPaginationClick(page, pageSize)}>{page}</button>
            })}
        </div>
    )
}


export default Pagination ;