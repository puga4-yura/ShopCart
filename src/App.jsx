import React from 'react';
import {data} from "./store/store.jsx"
import Product from "./components/productcart/Product"
import ResultCart from "./components/ChooseProduct/ChooseProduct"
import logo from './logo.svg';
import './App.css';

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

    removeElement = el => {
        const newList = this.state.qty.filter(function (item) {
            return item.id !== el.id;

        });
        const newListAfterDelete = this.state.productToWillBuyCount.filter(function (item) {
            return item.id !== el.id
        })

        this.setState({
            productToWillBuyCount: newListAfterDelete
        });

        this.setState({
            qty: newList
        });
    };

    productToWillBuyCount = el => {
        const updateElement = [... this.state.productToWillBuyCount];
        updateElement.push(el)
        console.log(updateElement)
        const ListNameProd  = updateElement.map(function (item) {
            return (
              <div>
                  <div>{item.title}</div>
                  <div>Цена: {item.price}</div>
              </div>
              )
            console.log(item.title)
        })

        const ListPriceProd  = updateElement.map(function (item) {
            return Number(item.price)
        })

        console.log(ListPriceProd)
        var allPrice = ListPriceProd.reduce(function(sum, current) {
            return sum + current;
        }, 0);

        console.log(allPrice)
        this.setState({
            productToWillBuyCount: updateElement,
            productToWillBuyListName:  ListNameProd,
            productToWillPrice: allPrice
        })
    };


    removeElementFromBuy = el => {
        const updataNewList = this.state.productToWillBuyCount.filter(function (item) {
            return item.id !== el.id;
        });

        const ListNameProd  = updataNewList.map(function (item) {
            return (
              <div>
                  <div>{item.title}</div>
                  <div>{item.price}</div>
              </div>
            )
        })


        const ListPriceProd  = updataNewList.map(function (item) {
            return Number(item.price)
        })

        console.log(ListPriceProd)
        const allPrice = ListPriceProd.reduce(function(sum, current) {
            return sum + current;
        }, 0);

        this.setState({
            productToWillBuyCount: updataNewList,
            productToWillBuyListName:  ListNameProd,
            productToWillPrice: allPrice
        });
    };

    render() {
        return (
            <div className="mainContainer">
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
                      productToWillBuyCount = {this.state.productToWillBuyCount}
                      productToWillBuyListName = {this.state.productToWillBuyListName}
                      productToWillPrice = {this.state.productToWillPrice}
                    />
            </div>
        )
    }
}


export default App;
