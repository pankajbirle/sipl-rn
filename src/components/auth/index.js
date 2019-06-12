import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from "./login";
import ForgetPassword from "./forget-password";
import Register from "./register";

const MainNavigator = createStackNavigator(
  {
    Login: Login,
    ForgetPassword: ForgetPassword,
    Register: Register
  },
  {
    headerMode: "none"
  }
);

const AuthStack = createAppContainer(MainNavigator);
export default AuthStack;
