import React, { Component } from 'react';


import AdminView from './AdminView';
    
 class HomePage extends Component {
     constructor () {
        super();

         this.state = {
 	        itemCurrentlyOnSale: 'A Hammer',
 	        editSaleItem: true,
 	        productList: [
 		    {
 		    productName: 'Hammer',
 		    description: 'Itsa hammer',
 		    price: 12.3,
 		    },
 		    {
 		    productName: 'Nail',
 		    description: 'Itsa nail',
 		    price: 0.12,
             }
             
            ]
         };
 }
    
    _toggleEditSaleItem = () => {
     const editSaleItem = !this.state.editSaleItem;
     this.setState({editSaleItem});
   };

    _handleItemCurrentlyOnSaleChange = (event) => {
        const itemCurrentlyOnSale = event.target.value;

        this.setState({itemCurrentlyOnSale});
    };

        _addNewProductToProductList = (newProduct) => {
            const productList = [...this.state.productList];
            productList.push(newProduct);
            this.setState({productList});
        };

   render() {
     return (
         <div>
             <h1>My Hardware Store</h1>
             <div>
             <span>Currently On Sale: { this.state.itemCurrentlyOnSale }!</span>
             <span>
                 <button onClick={this._toggleEditSaleItem}>
                { this.state.editSaleItem ? 'Hide' : 'Edit Sale Item'}
                </button>
                </span>

             { this.state.editSaleItem ? 
             <div>
                 <input
                  onChange={this._handleItemCurrentlyOnSaleChange}
                 value={this.state.itemCurrentlyOnSale}
                 type="text"
                 /> 
                 </div>
                : null
             }
             <AdminView 
             productList={this.state.productList} 
             addNewProductToProductList={this.addNewProductToProductList}/>
         </div>
         </div>    
      )
   }
 }

export default HomePage;