import { StyleSheet,Dimensions } from "react-native";
import { getStatusBarHeight } from 'react-native-status-bar-height';

const conStyles = StyleSheet.create({
  safeAreaMy: {
    flex: 1,
    backgroundColor: "white"
  },
  scroll: {
    justifyContent: "space-evenly",
    flexGrow: 1,
    minHeight:Dimensions.get("window").height /2

  }
});
const cardStyles = StyleSheet.create({
  storeCard: {
    borderRadius: 10,
    shadowColor: "#000",
    justifyContent: "center",
    backgroundColor: "white",
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7
  },
  cImgWrap: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden"
  },
  cTextWrap: {
    padding: 10
  }
});
const headerStyles = StyleSheet.create({
  storeStyles: {
    minHeight: 100 ,
    // paddingTop:getStatusBarHeight(true),
    backgroundColor: "#2E2E2E",
  },
  cartTxt: {
    position: "absolute",
    right: 0,
    width: 14,
    height: 14,
    borderRadius: 100,
    elevation: 5,
    backgroundColor: "#7AB87F",
    justifyContent: "center",
    alignItems: "center"
  }
});
const textStyles = StyleSheet.create({
  bolding: {
    color: "#000000",
    fontSize: 20
  }
});
const textIn = StyleSheet.create({
  label: {
    paddingTop: 20
  },
  Flabel: {
    paddingTop: 50
  },
  input: {
    borderBottomColor: "#000000",
    borderBottomWidth: 1,
    paddingTop: 5,
    fontSize: 17,
    paddingBottom:5
  }
});
const btnStyles = StyleSheet.create({
  basic: {
    backgroundColor: "#2E2E2E",
    borderRadius: 5,
    color: "white",
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
    paddingVertical: 11,
    alignItems: "center"
  },
  cartBtn: {
    backgroundColor: "#2E2E2E",
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 5
  },
  plusBtn: {
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  cartBtnOutline: {
    backgroundColor: "white",
    borderRadius: 5,
    color: "white",
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
    paddingVertical: 11,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#2E2E2E"
  }
});
const bottomTab = StyleSheet.create({
  cartSheet: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    shadowColor: "#000",
    marginTop: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24
  }
});
const lines = StyleSheet.create({
  simple: {
    width: "100%",
    marginVertical: 10,
    borderBottomColor: "#EFEFF4",
    borderBottomWidth: 1
  }
});

export {
  conStyles,
  textStyles,
  textIn,
  btnStyles,
  headerStyles,
  cardStyles,
  bottomTab,
  lines
};
