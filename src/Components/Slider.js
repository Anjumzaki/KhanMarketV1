
import React, { Component } from 'react';
import {
    Text,
    View,
    Dimensions,
    ImageBackground,
    Image,
    StyleSheet,
    LinearGradient,
    TouchableOpacity
} from 'react-native';
import Carousel from 'react-native-looped-carousel';
import SliderItem from './SliderItem'

const { width } = Dimensions.get('window');
const { height } = 300;


export default class CarouselExample extends Component {

    constructor(props) {
        super(props);

        this.state = {
            size: { width, height },
            data:{
                Discount:'2 Packs for $2.20',
                DisAmmount:'Save $1.30',
                imgUrl:require('../../assets/cabbage.png'),
                itemDescri:'Fresh broccoli from the gardens of colombia',
                colo:'#7cba80',
            },
            data1:{
                Discount:'2 Kg for $3.00',
                DisAmmount:'Save $1.00',
                imgUrl:require('../../assets/kenya.jpg'),
                itemDescri:'Green beans from kenya highly fresh and hygenic ',
                colo:'#63cdda',
            },
            data2:{
                Discount:'3 dozen for $1.70',
                DisAmmount:'Save $0.30',
                imgUrl:require('../../assets/carrots-vegetables.jpg'),
                itemDescri:'Fresh carots from Bangladesh high in fiber',
                colo:'#cf6a87',
            },
            data3:{
                Discount:'5 dozen for $4.70',
                DisAmmount:'Save $2.50',
                imgUrl:require('../../assets/orange-fruit-161559.jpg'),
                itemDescri:'Fresh orange from the gardens of nepal',
                colo:'#e15f41',
            },
        };
    }

    _onLayoutDidChange = (e) => {
        const layout = e.nativeEvent.layout;
        this.setState({ size: { width: layout.width, height: layout.height } });
    }

    render() {
        return (
            <View onLayout={this._onLayoutDidChange} style={{marginBottom:40}}>
                {/* <Text>asd</Text> */}
                <Carousel
                    delay={6000}
                    style={{ width: Dimensions.get('window').width, height: 250 }}
                    autoplay={true}
                    bullets
                    bulletStyle={{
                        padding: 0,
                        margin: 3,
                        marginTop: 110,
                        borderColor: "#89898C"
                      }}
                      chosenBulletStyle={{
                        padding: 0,
                        margin: 3,
                        marginTop: 110,
                        backgroundColor: "#89898C"
                      }}
                    
                >
                    <SliderItem data={this.state.data}/>
                    <SliderItem data={this.state.data1}/>
                    <SliderItem data={this.state.data2}/>
                    <SliderItem data={this.state.data3}/>
                </Carousel>
            </View>
        );
    }
}
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