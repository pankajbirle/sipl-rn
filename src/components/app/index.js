import {
  createDrawerNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";
import DrawerComponent from "./drawer";
import ChangePassword from "./account-settings/ChangePassword";
import UpdateProfile from "./account-settings/UpdateProfile";
import AssetLists from "../app/assets/index";

const MyStackNavigator = createStackNavigator(
  {
    Home: {
      screen: UpdateProfile
    },
    UpdateProfile: {
      screen: AssetLists
    },
    ChangePassword: {
      screen: ChangePassword
    }
    /* OrganisationProfile: {
      screen: OrganisationProfile
    } */
  },
  {
    headerMode: "none"
  }
);

const MyDrawerNavigator = createDrawerNavigator(
  {
    MainStack: {
      screen: MyStackNavigator
    }
  },
  {
    contentComponent: DrawerComponent /** This is our custom drawer component */
  }
);

const AppStack = createAppContainer(MyDrawerNavigator);

export default AppStack;
