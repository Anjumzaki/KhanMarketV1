import { StyleSheet } from "react-native";

const conStyles = StyleSheet.create({
  safeAreaMy: {
    flex: 1,
    backgroundColor: "white"
  },
  scroll: {
    justifyContent: "space-evenly",
    flexGrow: 1
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
    height: 100,
    backgroundColor: "#2E2E2E"
    // paddingHorizontal:20,
    // paddingVertical:15,
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
    paddingTop: 10,
    fontSize: 17
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
  cartBtnOutline:{
    backgroundColor: "white",
    borderRadius: 5,
    color: "white",
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
    paddingVertical: 11,
    alignItems: "center",
    borderWidth:1,
    borderColor:'#2E2E2E'
  }
});
const bottomTab = StyleSheet.create({
  cartSheet: {
    paddingHorizontal: 20,
    paddingVertical:15,
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

export {
  conStyles,
  textStyles,
  textIn,
  btnStyles,
  headerStyles,
  cardStyles,
  bottomTab
};
