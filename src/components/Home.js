import React from 'react'
import Product from '../Grocery.js'

function Home(props) {
    console.log(props, "props")


    return (

        <>

            {

                <div>


                    {Product.map((data, key) => {
                        console.log(data, "apidata")

                        return (

                            <div className="cart-wrapper">
                                <div className="img-wrapper item">
                                    <img src={data.src} />
                                </div>
                                <div className="text-wrapper item">
                                    <span>
                                        Name:-  {data.name}
                                    </span><br />

                                    <span>
                                        Price:- {data.price}
                                    </span>
                                </div>
                                <div className="btn-wrapper item">
                                    <button
                                        onClick={
                                            () => { props.addToCartHandler({ pice: 1000, name: 'i phone 11' }) }
                                        }>
                                        Add </button>
                                    <button
                                        onClick={
                                            () => { props.RemovetocartHandler() }}>
                                        Remove</button>
                                </div>
                            </div>

                        );
                    })}

                </div>
            }

        </>
    )

}
export default Home