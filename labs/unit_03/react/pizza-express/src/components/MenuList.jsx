import React, { Component } from 'react';
import MenuItem from './MenuItem';
import pizzaData from '../pizzaData'

class MenuList extends Component {
    render () {
        return (
            <div className="menu" id="menu">
                <h1>Menu</h1>
                <div className="menu-container">
                    {pizzaData.map((pizza, i) => {
                        return <MenuItem key={i} name={pizza.name} price={pizza.price} description={pizza.description} image={pizza.image} />
                    })}
                 </div>
            </div>        
        );
    }
}

export default MenuList;