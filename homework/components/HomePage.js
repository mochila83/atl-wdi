import React, { Component } from 'react';


import AdminView from './AdminView';
import ShopView from './ShopView';
import CartView from './CartView';
    
 class HomePage extends Component {
     
    constructor () {
        super();

         this.state = {
 	        itemCurrentlyOnSale: 'A Hammer',
            editSaleItem: false,
            showAdminView: false,         
 	        productList: [
 		    {
 		    productName: 'Hammer',
 		    description: 'Its a hammer',
 		    price: 12.3,
 		    },
 		    {
 		    productName: 'Nail',
 		    description: 'Its a nail',
 		    price: 0.12,
             }
             
            ],
            cartList: [],
         };
 }
    
    _toggleEditSaleItem = () => {
     const editSaleItem = !this.state.editSaleItem;
     this.setState({editSaleItem});
   };

   _toggleAdminView = () => {
       const showAdminView = !this.state.showAdminView;
       this.setState({showAdminView});
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
     
    _deleteProductFromListByIndex = (productToDelete) => {
        const productList = [...this.state.productList];
        productList.splice(productToDelete, 1);
        this.setState({productList});
    };

    _addProductToCart = (index) => {
        const product = {...this.state.productList[index]};
        const cartList = [...this.state.cartList];

        
        cartList.push(product);

        this.setState({cartList});

    };

    _removeProductFromCart = (index) => {
        const cartList = [...this.state.cartList];

        cartList.splice(index, 1);

        this.setState({cartList});
    };

   render() {
       const adminView = <AdminView
            productList ={this.state.productList}
            addNewProductToProductList={this._addNewProductToProductList}
            deleteProductFromListByIndex={this._deleteProductFromListByIndex}/>;

       const shopView = <ShopView
            productList={this.state.productList}
            addProductToCart={this._addProductToCart}/>; 


     return (
         <div>
             <div>
                 <div id="home-page-nav">
                     <h1>Hardware Store</h1>
                     <span>Currently on Sale: {this.state.itemCurrentlyOnSale!}</span>

                     <div>

                         {
                             this.state.editSaleItem ? <div>
                                 <input 
                                    onChange={this._handleItemCurrentlyOnSaleChange}
                                    value={this.state.itemCurrentlyOnSale}
                                    type="text"
                                    />
                                    </div>
                                    : null
                         }
                     </div>
                     <div>
                         <button onCLick={this._toggleAdminView}>
                             {this.state.showAdminView
                                ? 'Show Shop View'
                                : 'Show Admin View'}
                         </button>
                         </div>
                         </div>
                         </div>


                <div id="view-container">
                    {this.state.showAdminView ? adminView : shopView}

                    <CartView
                        productList={this.state.cartList}
                        removeProductFromCart={this._removeProductFromCart}/>
                 </div>
                </div>

     );
   } 
 }


export default HomePage;