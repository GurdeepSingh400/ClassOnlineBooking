import React from 'react'
function Header(props) {
    console.warn(props.data)
    console.log(props.data.name, "productname")
    return (

        <>

            <div>
                <div className="add-to-cart">
                    <span className="cart-count">{props.data.length}</span>
                    <img onclick src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
                </div>
                <div>
                    Product Name {props.data.name}<br />
                    Product Price {props.data.price}<br />
                    Product Quantity{props.data.length}
                </div>


            </div>

        </>
    )

}

export default Header



