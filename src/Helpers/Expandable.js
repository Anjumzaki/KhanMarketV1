/*Example of Expandable ListView in React Native*/
import React, { Component } from "react";
//import react in our project
import {
  LayoutAnimation,
  StyleSheet,
  View,
  Text,
  ScrollView,
  UIManager,
  TouchableOpacity,
  Platform
} from "react-native";
//import basic react native components
import LatoText from "./LatoText";
import { AntDesign } from "@expo/vector-icons";
import { Content } from "native-base";
class ExpandableItemComponent extends Component {
  //Custom Component for the Expandable List 
  constructor() {
    super();
    this.state = {
      layoutHeight: 0
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.item.isExpanded) {
      this.setState(() => {
        return {
          layoutHeight: null
        };
      });
    } else {
      this.setState(() => {
        return {
          layoutHeight: 0
        };
      });
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.layoutHeight !== nextState.layoutHeight) {
      return true;
    }
    return false;
  }

 

  render() {

    return (
      <View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={this.props.onClickFunction}
          style={styles.header}
        >
          <LatoText
            fontName="Lato-Bold"
            fonSiz={17}
            col="#5C5C5C"
            text={this.props.item.category_name}
          />
          <View>
            {!this.props.item.isExpanded && (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <AntDesign
                  name="down"
                  color="#5C5C5C"
                  size={10}
                  style={{ paddingHorizontal: 5 }}
                />
                <LatoText
                  fontName="Lato-Regular"
                  fonSiz={15}
                  col="#5C5C5C"
                  text={"Expand"}
                />
              </View>
            )}
          </View>
          {/* <Text style={styles.headerText}></Text> */}
        </TouchableOpacity>
        <View
          style={{
            height: this.state.layoutHeight,
            overflow: "hidden"
          }}
        >
          {this.props.item.category_name == "Special Instructions" && (
            <View
              style={{
                margin: 20,
                padding: 10,
                borderColor: "#EFEFF4",
                borderWidth: 1,
                borderRadius: 5
              }}
            >
              <LatoText
                fontName="Lato-Regular"
                fonSiz={17}
                col="#5C5C5C"
                text={this.props.item.subcategory[0].val}
              />
            </View>
          )}
          {this.props.item.category_name == "Disclaimer" && (
            <View
              style={{
                margin: 20,
                padding: 10,
                borderColor: "#EFEFF4",
                borderWidth: 1,
                borderRadius: 5
              }}
            >
              <LatoText
                fontName="Lato-Regular"
                fonSiz={17}
                col="#5C5C5C"
                text={this.props.item.subcategory[0].val}
              />
            </View>
          )}
          {this.props.item.category_name == "Nutritional Facts" && (
            <View
              style={{
                marginHorizontal: 20,
                padding: 10
              }}
            >
              <View style={styles.indivi}>
                <LatoText
                  fontName="Lato-Regular"
                  fonSiz={17}
                  col="#5C5C5C"
                  text={`Serving Size ${this.props.item.subcategory[0].val}g`}
                />
              </View>
              <View style={styles.bordeBottom}>
                <LatoText
                  fontName="Lato-Regular"
                  fonSiz={17}
                  col="#5C5C5C"
                  text={`Servings Per Container ${this.props.item.subcategory[1].val}`}
                />
              </View>
              <View style={styles.bordeBottomSlick}>
                <LatoText
                  fontName="Lato-Bold"
                  fonSiz={12}
                  col="#5C5C5C"
                  text={"Amount Per Serving"}
                />
              </View>
              <View
                style={[
                  styles.bordeBottom,
                  { flexDirection: "row", alignItems: "center" }
                ]}
              >
                <LatoText
                  fontName="Lato-Bold"
                  fonSiz={15}
                  col="#5C5C5C"
                  text={"Calories "}
                />
                <LatoText
                  fontName="Lato-Regular"
                  fonSiz={20}
                  col="#5C5C5C"
                  text={` ${this.props.item.subcategory[2].val}`}
                />
              </View>

              <View
                style={[
                  styles.bordeBottomSlick,
                  { flexDirection: "row", justifyContent: "flex-end" }
                ]}
              >
                <LatoText
                  fontName="Lato-Regular"
                  fonSiz={15}
                  col="#5C5C5C"
                  text={" % Daily Value "}
                />
              </View>
              <View
                style={[
                  styles.bordeBottomSlick,
                  {
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between"
                  }
                ]}
              >
                <View style={{flexDirection:'row',alignItems:'center'}}>
                  <LatoText
                    fontName="Lato-Bold"
                    fonSiz={15}
                    col="#5C5C5C"
                    text={"Total Fat "}
                  />
                  <LatoText
                    fontName="Lato-Regular"
                    fonSiz={20}
                    col="#5C5C5C"
                    text={` ${this.props.item.subcategory[3].val} g`}
                  />
                </View>
                <View>
                  <LatoText
                    fontName="Lato-Bold"
                    fonSiz={15}
                    col="#5C5C5C"
                    text={"5% "}
                  />

                </View>
              </View>
              <View style={styles.bordeBottomSlick1}>
                <LatoText
                  fontName="Lato-Regular"
                  fonSiz={15}
                  col="#5C5C5C"
                  text={`Saturated fat ${this.props.item.subcategory[4].val} g`}
                />
              </View>
              <View style={styles.bordeBottomSlick1}>
                <LatoText
                  fontName="Lato-Regular"
                  fonSiz={15}
                  col="#5C5C5C"
                  text={`Polyunsaturated fat ${this.props.item.subcategory[5].val} g`}
                />
              </View>
              <View style={styles.bordeBottomSlick1}>
                <LatoText
                  fontName="Lato-Regular"
                  fonSiz={15}
                  col="#5C5C5C"
                  text={`Monounsaturated fat ${this.props.item.subcategory[6].val} g`}
                />
              </View>
              <View style={styles.bordeBottomSlick1}>
                <LatoText
                  fontName="Lato-Regular"
                  fonSiz={15}
                  col="#5C5C5C"
                  text={`Trans fat ${this.props.item.subcategory[7].val} g`}
                />
              </View>
              <View
                style={[
                  styles.bordeBottomSlick,
                  {
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between"
                  }
                ]}
              >
                <View style={{flexDirection:'row',alignItems:'center'}}>
                  <LatoText
                    fontName="Lato-Bold"
                    fonSiz={15}
                    col="#5C5C5C"
                    text={"Cholesterol "}
                  />
                  <LatoText
                    fontName="Lato-Regular"
                    fonSiz={20}
                    col="#5C5C5C"
                    text={` ${this.props.item.subcategory[8].val} mg`}
                  />
                </View>
                <View>
                  <LatoText
                    fontName="Lato-Bold"
                    fonSiz={15}
                    col="#5C5C5C"
                    text={"25% "}
                  />

                </View>
              </View>
              <View
                style={[
                  styles.bordeBottomSlick,
                  {
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between"
                  }
                ]}
              >
                <View style={{flexDirection:'row',alignItems:'center'}}>
                  <LatoText
                    fontName="Lato-Bold"
                    fonSiz={15}
                    col="#5C5C5C"
                    text={"Sodium "}
                  />
                  <LatoText
                    fontName="Lato-Regular"
                    fonSiz={20}
                    col="#5C5C5C"
                    text={` ${this.props.item.subcategory[9].val} mg`}
                  />
                </View>
                <View>
                  <LatoText
                    fontName="Lato-Bold"
                    fonSiz={15}
                    col="#5C5C5C"
                    text={"2% "}
                  />

                </View>
              </View>
              <View
                style={[
                  styles.bordeBottomSlick,
                  {
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between"
                  }
                ]}
              >
                <View style={{flexDirection:'row',alignItems:'center'}}>
                  <LatoText
                    fontName="Lato-Bold"
                    fonSiz={15}
                    col="#5C5C5C"
                    text={"Potassium "}
                  />
                  <LatoText
                    fontName="Lato-Regular"
                    fonSiz={20}
                    col="#5C5C5C"
                    text={` ${this.props.item.subcategory[10].val} mg`}
                  />
                </View>
                <View>
                  <LatoText
                    fontName="Lato-Bold"
                    fonSiz={15}
                    col="#5C5C5C"
                    text={"12% "}
                  />

                </View>
              </View>
              <View
                style={[
                  styles.bordeBottomSlick,
                  {
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between"
                  }
                ]}
              >
                <View style={{flexDirection:'row',alignItems:'center'}}>
                  <LatoText
                    fontName="Lato-Bold"
                    fonSiz={15}
                    col="#5C5C5C"
                    text={"Total Carbohydrate "}
                  />
                  <LatoText
                    fontName="Lato-Regular"
                    fonSiz={20}
                    col="#5C5C5C"
                    text={` ${this.props.item.subcategory[11].val} g `}
                  />
                </View>
                <View>
                  <LatoText
                    fontName="Lato-Bold"
                    fonSiz={15}
                    col="#5C5C5C"
                    text={"0% "}
                  />
                </View>
              </View>
              <View style={styles.bordeBottomSlick1}>
                <LatoText
                  fontName="Lato-Regular"
                  fonSiz={15}
                  col="#5C5C5C"
                  text={`Dietary fiber ${this.props.item.subcategory[12].val} g`}
                />
              </View>
              <View style={styles.bordeBottomSlick1}>
                <LatoText
                  fontName="Lato-Regular"
                  fonSiz={15}
                  col="#5C5C5C"
                  text={`Sugar ${this.props.item.subcategory[13].val} g`}
                />
              </View>
              <View
                style={[
                  styles.bordeBottomSlick,
                  {
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between"
                  }
                ]}
              >
                <View style={{flexDirection:'row',alignItems:'center'}}>
                  <LatoText
                    fontName="Lato-Bold"
                    fonSiz={15}
                    col="#5C5C5C"
                    text={" Protein "}
                  />
                  <LatoText
                    fontName="Lato-Regular"
                    fonSiz={20}
                    col="#5C5C5C"
                    text={` ${this.props.item.subcategory[14].val} g `}
                  />
                </View>
                <View>
                  <LatoText
                    fontName="Lato-Bold"
                    fonSiz={15}
                    col="#5C5C5C"
                    text={"52% "}
                  />
                </View>
              </View>
            </View>
          )}
        </View>
      </View>
    );
  }
}

export default class App extends Component {
  //Main View defined under this Class
  constructor() {
    super();
    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    this.state = { listDataSource: [] };
  }

  updateLayout = index => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const array = [...this.state.listDataSource];
    array[index]["isExpanded"] = !array[index]["isExpanded"];
    this.setState(() => {
      return {
        listDataSource: array
      };
    });
  };

  componentDidMount(){
    var CONTENT = []

    CONTENT.push( {
      isExpanded: false,
      category_name: "Nutritional Facts",
      subcategory: [
        { id: 1, val:  this.props.product.servingSize},
        { id: 2, val: this.props.product.servingPerContainer },
        { id: 3, val: this.props.product.calories },
        { id: 4, val: this.props.product.fatInGm },
        { id: 5, val: this.props.product.saturatedFatInGm },
        { id: 6, val: this.props.product.polyunsaturatedFatInGm },
        { id: 7, val: this.props.product.monounsaturatedFatInGm },
        { id: 8, val: this.props.product.transFatInGm },
        { id: 9, val: this.props.product.cholesterol },
        { id: 10, val: this.props.product.sodium },
        { id: 11, val: this.props.product.potassium },
        { id: 12, val: this.props.product.totalCarbs },
        { id: 13, val: this.props.product.dietaryFiber },
        { id: 14, val: this.props.product.sugar },
        { id: 15, val: this.props.product.protienInGm}
      ]
    })

    CONTENT.push({
      isExpanded: false,
      category_name: "Special Instructions",
      subcategory: [
        {
          id: 1,
          val:  this.props.product.specialInstruction
        }
      ]
    })
    CONTENT.push({
      isExpanded: false,
      category_name: "Disclaimer",
      subcategory: [
        {
          id: 7,
          val:
            "Eiusmod qui esse ullamco laborum quis. Magna duis laborum est et exercitation minim esse ad esse excepteur. Cupidatat minim consequat anim non laboris veniam nisi ullamco esse. Ullamco aliqua aliqua tempor fugiat esse exercitation culpa."
        }
      ]
    })

    this.setState({listDataSource: CONTENT})

  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.listDataSource.map((item, key) => (
          <ExpandableItemComponent
            key={item.category_name}
            onClickFunction={this.updateLayout.bind(this, key)}
            item={item}
          />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30
  },
  topHeading: {
    paddingLeft: 10,
    fontSize: 20
  },
  header: {
    padding: 16,
    paddingHorizontal: 20,
    borderColor: "#EFEFF4",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  headerText: {
    fontSize: 16,
    fontWeight: "500"
  },
  separator: {
    height: 0.5,
    backgroundColor: "#808080",
    width: "95%",
    marginLeft: 16,
    marginRight: 16
  },
  text: {
    fontSize: 16,
    color: "#606070",
    padding: 10
  },
  content: {
    paddingHorizontal: 20,
    backgroundColor: "#fff"
  },
  indivi: {
    paddingVertical: 5
  },
  bordeBottom: {
    paddingVertical: 5,
    borderBottomColor: "#89898C",
    borderBottomWidth: 2
  },
  bordeBottomSlick: {
    paddingVertical: 10,
    borderBottomColor: "#89898C",
    borderBottomWidth: 1
  },
  bordeBottomSlick1: {
    paddingVertical: 10,
    borderBottomColor: "#89898C",
    borderBottomWidth: 1,
    paddingLeft:20
  }
});
const CONTENT = [
  {
    isExpanded: false,
    category_name: "Nutritional Facts",
    subcategory: [
      { id: 1, val: "Sub Cat 1" },
      { id: 3, val: "Sub Cat 3" }
    ]
  },
  {
    isExpanded: false,
    category_name: "Special Instructions",
    subcategory: [
      {
        id: 4,
        val:
          " Eiusmod qui esse ullamco laborum quis. Magna duis laborum est et exercitation minim esse ad esse excepteur. Cupidatat minim consequat anim non laboris veniam nisi ullamco esse. Ullamco aliqua aliqua tempor fugiat esse exercitation culpa."
      }
    ]
  },
  {
    isExpanded: false,
    category_name: "Disclaimer",
    subcategory: [
      {
        id: 7,
        val:
          "Eiusmod qui esse ullamco laborum quis. Magna duis laborum est et exercitation minim esse ad esse excepteur. Cupidatat minim consequat anim non laboris veniam nisi ullamco esse. Ullamco aliqua aliqua tempor fugiat esse exercitation culpa."
      }
    ]
  }
];
