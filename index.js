import React, { Component } from 'react';
import {
    AppRegistry, YellowBox, NetInfo,
} from 'react-native';
import { Provider } from 'react-redux';
import { Root } from 'native-base';
import configureStore from './src/configureStore';
import App from './src';
import NetWorkError from './src/components/common/NetWorkError';

const store = configureStore();
console.disableYellowBox = true;

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

// console.log = () => { };
// console.error = () => { };

class Snapvat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            networkStatus: true
        };
    }
    render() {
        return (
            [<Provider key={'1'} store={store}>
                <Root>
                    <App />
                </Root>
            </Provider>, <NetWorkError key={'2'} />]
        );
    }
}
export default Snapvat;

AppRegistry.registerComponent('snapvat', () => Snapvat);
