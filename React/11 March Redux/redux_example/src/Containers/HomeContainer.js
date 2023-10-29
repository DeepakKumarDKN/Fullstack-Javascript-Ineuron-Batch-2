import Home from "../Components/Home"
import { connect } from "react-redux";
import { addtoCart } from "../Services/Actions/Action";

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => (
    {
        addToCartHandler : data=>dispatch(addtoCart(data))
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(Home)