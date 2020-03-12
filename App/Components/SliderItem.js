import React from 'react';
import { StyleSheet, Text, View,Dimensions,ImageBackground,TouchableOpacity } from 'react-native';

import LatoText from '../Helpers/LatoText'
class SliderItem extends React.Component {
  render(){
    return (
        <View>
        <ImageBackground style={styles.imgCon} source={this.props.data.imgUrl} >
            <View style={[styles.wrapTop,{backgroundColor:this.props.data.colo}]}>
                <View style={styles.topRight}>
                    <LatoText fontName="Lato-Bold" fonSiz={16} col='white' text={this.props.data.Discount} />
                    <View style={{ marginTop: 5 }}>
                        <LatoText fontName="Lato-Light" fonSiz={13} col='white' text={this.props.data.DisAmmount} />
                    </View>
                </View>
            </View>
            <View style={styles.bottomText}>
                <ImageBackground style={{ width: Dimensions.get('window').width, height: 170 }} source={require('../../assets/bgSlider.png')} >
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ paddingTop: 105, paddingHorizontal: 10, width: '73%' }}>
                            <LatoText fontName="Lato-Regular" fonSiz={17} col='white' text={this.props.data.itemDescri} />
                        </View>
                        <View style={{ paddingTop: 105, paddingHorizontal: 10, width: '30%', justifyContent: 'flex-end' }}>
                            <TouchableOpacity style={styles.buybBtn}>
                                <LatoText fontName="Lato-Regular" fonSiz={16} col='gray' text="BUY" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </ImageBackground>
    </View>
    );
  }
}
export default SliderItem
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgCon: {
        width: Dimensions.get('window').width,
        height: 250
    },
    topRight: {
        alignSelf: 'flex-end',

    },
    wrapTop: {
        alignSelf: 'flex-end',

        marginTop: 30,
        backgroundColor: '#7cba80',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
    },
    bottomText: {
        height: 200,
        flexDirection: "row",
    },
    buybBtn: {
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 5,
        paddingHorizontal: 15,
        paddingVertical: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
});
