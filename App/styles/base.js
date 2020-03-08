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
const headerStyles = StyleSheet.create({
  storeStyles: {
    height: 100,
    backgroundColor: "#2E2E2E",
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
  }
});

export { conStyles, textStyles, textIn, btnStyles,headerStyles };
