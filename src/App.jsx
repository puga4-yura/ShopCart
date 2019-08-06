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
    constructor() {
        super();

        this.state = {
            qty: data,
            productToWillBuyCount: [],
            productToWillBuyListName: [],
            productToWillPrice: []
        };
    };


    calculatePrice(items){
        //console.log(this.state.qty.length);
       return items.map((item)=> Number(item.price))
    }

    calcualteBasketPrice(items){
       return items.reduce(function (sum, current) {
            return sum + current;
        }, 0);
    }

    renderProduct(items){
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
        const allPrice= this.calcualteBasketPrice(ListPriceProd);

        this.setState({
            productToWillBuyCount: updateElement,
            productToWillBuyListName: ListNameProd,
            productToWillPrice: allPrice
        });

        this.setState({
            qty: newList
        });
    };

    productToWillBuyCount=el=> {
        const updateElement = [...this.state.productToWillBuyCount];
        updateElement.push(el);

        const ListNameProd = this.renderProduct(updateElement);
        const ListPriceProd = this.calculatePrice(updateElement);
        const allPrice= this.calcualteBasketPrice(ListPriceProd);


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
        const allPrice= this.calcualteBasketPrice(ListPriceProd);


        this.setState({
            productToWillBuyCount: updataNewList,
            productToWillBuyListName: ListNameProd,
            productToWillPrice: allPrice
        });
    };

    render() {
        return (
            <div className="mainContainer">
                <Pagination  item={this.state.qty}/>

                <div className="products">
                    {this.state.qty.map(el => {
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
