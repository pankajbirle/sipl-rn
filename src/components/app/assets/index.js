import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, FlatList, View, AsyncStorage, AppState } from 'react-native';
import { Container, Content } from 'native-base';
import { ValidationComponent, Toast } from '../../../helper';
import { HeaderComponent,  Loader, Text } from '../../common';

class AssetLists extends ValidationComponent {
    
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            deviceId: '',
            devicesStatus: [],
            helper: {
                loading: false
            },          
        };
    }
   

    /**
    * @method render
    * @description to render component
    */
    render() {
        return (
            <Container style={innerStyle.container}>
                <Loader isLoading={this.state.helper.loading} />
                <HeaderComponent
                    title='National Park'
                    leftButton='menu'
                    routeName='Home'
                    info={true}
                    rightAction={() => this.props.navigation.navigate('Sites')}
                />
                <Content>
                    <View style={paddingTop.Ten}>
                        <Text>Dashboard</Text>
                    </View>
                </Content>
            </Container>
        );
    }
}
const mapStateToProps = () => {   
    return {};
};

export default connect(mapStateToProps, null)(AssetLists);

const innerStyle = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    }
});
