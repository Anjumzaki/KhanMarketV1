import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Text, View } from "react-native";
import { CreateAccount, Search, Details, Search2, Profile } from "./src/Screens";
import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import Map from "./src/screens/Map";
import StackHeader from "./src/Helpers/StackHeader";
import StoreHeader from "./src/Helpers/StoreHeader";

import {
  Entypo,
  MaterialCommunityIcons
} from "@expo/vector-icons";
import ProductDetails from "./src/screens/ProductDetails";
import StoreDetails from "./src/screens/StoreDetails";
import SingleStoreHeader from "./src/Helpers/SingleStoreHeader";
import SingleCategHeader from "./src/Helpers/SingleCategHeader";
import store from "./src/store";
import { Provider as StoreProvider } from "react-redux";
import Cart from "./src/screens/Cart";
import Checkout1 from "./src/screens/Checkout1";
import QrCode from "./src/screens/QrCode";
import StoreInfo from "./src/screens/StoreInfo";
import Filters from "./src/screens/Filters";
import SingleCateg from "./src/screens/SingleCateg";
import CustomDrawerContent from './src/Helpers/CustomDrawerContent'
import Favourites from './src/screens/Favourites'
import StackGrayHeader from './src/Helpers/StackGrayHeader'
import MyOrders from "./src/screens/MyOrders";
import SignUp1 from "./src/screens/SignUp1"
import ChoosePass from './src/screens/ChoosePass'
const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator headerMode="none">
    <AuthStack.Screen name="Login" component={Login} />
    <AuthStack.Screen name="SignUp1" component={SignUp1} />
    <AuthStack.Screen name="ChoosePass" component={ChoosePass} />

    <AuthStack.Screen name="Map" component={Map} />
    <AuthStack.Screen
      name="CreateAccount"
      component={CreateAccount}
      options={{ title: "Create Account" }}
    />
    
  </AuthStack.Navigator>
);
const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const FavouritesStack = createStackNavigator();
const HomeStackScreen = () => (
  <HomeStack.Navigator
  >
    <HomeStack.Screen
      name="Home"
      component={Home}
      options={{ header: props => <StoreHeader {...props} />}}

    />
    <HomeStack.Screen
      name="StoreDetails"
      component={StoreDetails}
      options={{ header: props => <SingleStoreHeader {...props} />}}
    />
    <HomeStack.Screen
      name="ProductDetails"
      component={ProductDetails}
      options={{
        header: props => (
          <StackHeader cart={true} nameTitle="Product Details" {...props} />
        ),
        tabBarOptions: false
      }}
    />
    <HomeStack.Screen
      name="Cart"
      component={Cart}
      options={{
        header: props => (
          <StackHeader cart={false} nameTitle="Cart" {...props} />
        )
      }}
    />
    <HomeStack.Screen
      name="Checkout1"
      component={Checkout1}
      options={{
        header: props => (
          <StackHeader cart={false} nameTitle="PICK UP DETAILS" {...props} />
        )
      }}
    />
    <HomeStack.Screen
      name="QrCode"
      component={QrCode}
      options={{
        header: props => (
          <StackHeader cart={false} nameTitle="ORDER PLACED" {...props} />
        )
      }}
    />
    <HomeStack.Screen
      name="StoreInfo"
      component={StoreInfo}
      options={{
        header: props => (
          <StackHeader cart={false} nameTitle="STORE INFO" {...props} />
        )
      }}
    />
    <HomeStack.Screen
      name="Filters"
      component={Filters}
      options={{
        header: props => (
          <StackHeader cart={false} nameTitle="Filters" {...props} />
        )
      }}
    />
    <HomeStack.Screen
      name="SingleCateg"
      component={SingleCateg}
      
      options={{
        header: props => (
          <SingleCategHeader cart={false} nameTitle="BEEF" {...props} />
        )
      }}
    />
   
    <HomeStack.Screen name="Profile" component={Profile}  options={{ header: props => <StackGrayHeader nameTitle="My Profile" {...props} />, }}/>

  </HomeStack.Navigator>
);


const FavouritesStackScreen = () => (
  <FavouritesStack.Navigator initialRouteName="Favourites">
    <FavouritesStack.Screen name="Favourites"   component={Favourites} 
     options={{ header: props => <StackGrayHeader nameTitle="Favourites" {...props} />, }}
    />
    
  </FavouritesStack.Navigator>
);
const MyOrderStack = createStackNavigator();
const MyOrderStackScreen = () => (
  <MyOrderStack.Navigator initialRouteName="MyOrders">
    <MyOrderStack.Screen name="MyOrders" component={MyOrders}  options={{ header: props => <StackGrayHeader nameTitle="My Orders" {...props} />, }}/>
  </MyOrderStack.Navigator>
);

const TabsScreen = () => (
  <Tabs.Navigator
    initialRouteName="Home"
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === "Home") {
          return (
            <Entypo
              name="home"
              size={26}
              color={focused ? "#2e2e2e" : "#89898c"}
            />
          );
        } else if (route.name === "Favourites") {
          return (
            <Entypo
              name="heart"
              size={26}
              color={focused ? "#2e2e2e" : "#89898c"}
            />
          );
        } else if (route.name === "My Orders") {
          return (
            <MaterialCommunityIcons
              name="clipboard-text"
              size={26}
              color={focused ? "#2e2e2e" : "#89898c"}
            />
          );
        }

        // You can return any component that you like here!
      }
    })}
    tabBarOptions={{
      activeTintColor: "#2E2E2E",
      inactiveTintColor: "#89898C",
    }}
    
  >
    <Tabs.Screen name="Favourites" component={FavouritesStackScreen} />
    <Tabs.Screen name="Home" component={HomeStackScreen} />
    <Tabs.Screen name="My Orders" component={MyOrderStackScreen} />
  </Tabs.Navigator>
);
const Drawer = createDrawerNavigator();
const DrawerScreen = () => (
  <Drawer.Navigator  drawerContentOptions={{
    activeTintColor: '#e91e63',
    itemStyle: {backgroundColor:'transparent' },
    labelStyle:{color:'#FFFFFF'}
  }}  drawerContent={props => <CustomDrawerContent {...props} />}
  screenOptions={({ route }) => ({
    drawerIcon: ({ focused, color, size }) => {
      let iconName;
      if (route.name === "About Us") {
        return (
          <MaterialCommunityIcons
            name="information"
            size={26}
            color={focused ? "#2e2e2e" : "#89898c"}
          />
        );
      } else if (route.name === "Favourites") {
        return (
          <Entypo
            name="heart"
            size={26}
            color={focused ? "#2e2e2e" : "#89898c"}
          />
        );
      }
      else if (route.name === "Home") {
        return (
          <Entypo
            name="home"
            size={26}
            color={focused ? "#2e2e2e" : "#89898c"}
          />
        );
      } else if (route.name === "My Orders") {
        return (
          <MaterialCommunityIcons
            name="clipboard-text"
            size={26}
            color={focused ? "#2e2e2e" : "#89898c"}
          />
        );
      }
      else if (route.name === "Rate Us") {
        return (
          <MaterialCommunityIcons
            name="star"
            size={26}
            color={focused ? "#2e2e2e" : "#89898c"}
          />
        );
      }
      else if (route.name === "Share") {
        return (
          <MaterialCommunityIcons
            name="share-variant"
            size={26}
            color={focused ? "#2e2e2e" : "#89898c"}
          />
        );
      }
      else if (route.name === "Share") {
        return (
          <Entypo
            name="Home"
            size={26}
            color={focused ? "#2e2e2e" : "#89898c"}
          />
        );
      }

    }
  })}
  
  >
    <Drawer.Screen name="Home" component={TabsScreen} />
    <Drawer.Screen name="Favourites" component={FavouritesStackScreen} />
    <Drawer.Screen name="My Orders" component={MyOrderStackScreen} />
    <Drawer.Screen name="About Us" component={TabsScreen} />
    <Drawer.Screen name="Rate Us" component={TabsScreen} />
    <Drawer.Screen name="Share" component={TabsScreen} />
  </Drawer.Navigator>
);

const RootStack = createStackNavigator();
const RootStackScreen = ({ userToken }) => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen
      name="Auth"
      component={AuthStackScreen}
      options={{
        animationEnabled: false
      }}
    />

    <RootStack.Screen
      name="App"
      component={DrawerScreen}
      options={{
        animationEnabled: false
      }}
    />
  </RootStack.Navigator>
);
export default () => {
  return (
    <StoreProvider store={store}>
        <NavigationContainer>
          <RootStackScreen />
        </NavigationContainer>
    </StoreProvider>
  );
};
