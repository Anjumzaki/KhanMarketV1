import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ProCards from '../Helpers/ProCards'
import LatoText from '../Helpers/LatoText'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { bindActionCreators } from "redux";
import { singleCatAsync } from "../store/actions";
import { connect } from "react-redux";

class Cart extends React.Component {

    render() {
        console.log("this.props.products",this.props.products)
        return ( 
            <View>
                <View style={{ flexDirection: 'row', padding: 10 }}>
                    <View style={{ width: '80%' }}>
                        <LatoText fontName="Sarabun-Light" fonSiz={25} col='#5C5C5C' text={this.props.name} ></LatoText>
                    </View>
                    <TouchableOpacity onPress={()=>{
                        this.props.singleCatAsync(this.props.name)
                        this.props.navigation.navigate('SingleCateg',{products:this.props.products, name: this.props.name})
                        
                        }}>
                        <View style={{  justifyContent: 'center', position: 'relative', top: 12 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                <LatoText style={{ alignSelf: 'flex-end' }} fontName="Lato-Light" fonSiz={16} col='#5C5C5C' text="See All" ></LatoText>
                                <MaterialCommunityIcons style={{ position: 'relative', bottom: 5 }} name="chevron-right" size={28} color="#5C5C5C" />
                            </View>
                        </View>
                    </TouchableOpacity>
 
                </View>   
                <View style={{ height: 312 }}> 
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        {this.props.products.map((prod,index) => (
                        <ProCards navigation={this.props.navigation} key={index} product={prod}/>
                        ))}
                    </ScrollView>
                </View>
            </View>


        );
    }
}
// export default Cart
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


const mapStateToProps = state => ({
    cart: state.Cart.cartData, 
    loading: state.Cart.cartLoading,
    error: state.Cart.cartError
  });
  const mapDispatchToProps = (dispatch, ownProps) =>
    bindActionCreators(
        {
          singleCatAsync
        },
        dispatch
    );
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Cart);