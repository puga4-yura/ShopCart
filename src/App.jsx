import React from 'react';
import {data} from "./store/store.jsx"
import Product from "./components/productcart/Product"
import ResultCart from "./components/ChooseProduct/ChooseProduct"
import logo from './logo.svg';
import './App.css';
import Pagination from "./components/Pagination/Pagination";

// сделать отдельные функции для пересчета
// вынести в отдельный компонет (выбор товара)
// при удалении дтовара что бы пересчитыывалась карта
// название товара что бы выводилось 2 СЛОВА ТОЛЬКО
// пагинация
class App extends React.Component {
    currentPage = 1;
    pageSize = 4;

    constructor() {
        super();

        this.state = {
            qty: data,
            pageData: data.slice(0, 4),
            productToWillBuyCount: [],
            productToWillBuyListName: [],
            productToWillPrice: []
        };
        this.paginationClick = this.paginationClick.bind(this);
    };

    paginate(page) {

    }


    calculatePrice(items) {
        //console.log(this.state.qty.length);
        return items.map((item) => Number(item.price))
    }

    calcualteBasketPrice(items) {
        return items.reduce(function (sum, current) {
            return sum + current;
        }, 0);
    }

    renderProduct(items) {
        return items.map(function (item) {
            return (
                <div>
                    <div>{item.title}</div>
                    <div>Цена: {item.price}</div>
                </div>
            )
        });
    }

    removeElement = el => {
        const newList = this.state.qty.filter(function (item) {
            return item.id !== el.id;
        });

        const updateElement = this.state.productToWillBuyCount.filter(function (item) {
            return item.id !== el.id
        });

        const ListNameProd = this.renderProduct(updateElement);
        const ListPriceProd = this.calculatePrice(updateElement);
        const allPrice = this.calcualteBasketPrice(ListPriceProd);

        this.setState({
            productToWillBuyCount: updateElement,
            productToWillBuyListName: ListNameProd,
            productToWillPrice: allPrice
        });

        this.setState({
            qty: newList
        });
            this.paginationClick(this.currentPage, this.pageSize)
    };

    productToWillBuyCount = el => {
        const updateElement = [...this.state.productToWillBuyCount];
        updateElement.push(el);

        const ListNameProd = this.renderProduct(updateElement);
        const ListPriceProd = this.calculatePrice(updateElement);
        const allPrice = this.calcualteBasketPrice(ListPriceProd);


        this.setState({
            productToWillBuyCount: updateElement,
            productToWillBuyListName: ListNameProd,
            productToWillPrice: allPrice
        })
    };


    removeElementFromBuy = el => {
        const updataNewList = this.state.productToWillBuyCount.filter(function (item) {
            return item.id !== el.id;
        });

        const ListNameProd = this.removeElement(updataNewList);
        const ListPriceProd = this.calculatePrice(updataNewList);
        const allPrice = this.calcualteBasketPrice(ListPriceProd);


        this.setState({
            productToWillBuyCount: updataNewList,
            productToWillBuyListName: ListNameProd,
            productToWillPrice: allPrice
        });
    };

    paginationClick(page, pageSize) {
        const pageData = this.state.qty.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
        this.setState({
            pageData: pageData
        });
        this.pageSize = pageSize;
        this.currentPage = page;
        console.log(page, pageSize, this.state.pageData)
    }

    //console.log(pages);
    render() {
        //console.log(pages);
        return (
            <div className="mainContainer">
                <div className="products">
                    <div>
                        <Pagination onPaginationClick={this.paginationClick} item={this.state.qty}/>
                    </div>

                    <div className="product-list">
                        {this.state.pageData.map(el => {
                            return (
                                <div>
                                    <Product
                                        key={el.id}
                                        el={el}
                                        removeElement={this.removeElement}
                                        productToWillBuyCount={this.productToWillBuyCount}
                                        removeElementFromBuy={this.removeElementFromBuy}/>

                                </div>
                            )
                        })}
                    </div>


                </div>
                <ResultCart
                    productToWillBuyCount={this.state.productToWillBuyCount}
                    productToWillBuyListName={this.state.productToWillBuyListName}
                    productToWillPrice={this.state.productToWillPrice}
                />
            </div>
        )
    }
}

export default App;
