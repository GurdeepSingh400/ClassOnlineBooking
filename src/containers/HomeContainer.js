import Home from '../components/Home'
import {connect} from 'react-redux'
import {addToCart,Removetocart} from '../service/actions/actions'

const mapStateToProps=state=>({
    // data:state.cardItems
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data)),
    RemovetocartHandler:data=>dispatch(Removetocart(data))

})
export default connect(mapStateToProps,mapDispatchToProps)(Home)
// export default Home;