import React from 'react'
import ProductCategoryRow from './productCategoryRow';
import ProductRow from './productrow';


class ProductList extends React.Component{
    
    render(){
        const rows = [];
        let lastCategory = null;

        this.props.product.forEach((product)=>{
            if(product.category != lastCategory){
                rows.push(<ProductCategoryRow  category={product.category}
                    key={product.category}/>)
            }

            rows.push(
                <ProductRow  category={product}
                    key={product.name}/>
            )
            lastCategory = product.category;
        })
        
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        )
    }
}

export default ProductList;