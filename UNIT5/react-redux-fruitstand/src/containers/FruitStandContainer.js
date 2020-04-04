import { connect } from 'react-redux';
import { addFruit } from '../actions/fruitStandActions';
import FruitStand from '../components/FruitStand';

const mapStateToProps = (state, ownProps) => { //ownProps is how you'd get params 
    console.log("state", state)
    return {
        fruits: state
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addFruit: (fruit) => dispatch(addFruit(fruit))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(FruitStand)