import React, { PureComponent, Component } from 'react';
import { View, ActivityIndicator, Image, StyleSheet, Platform } from 'react-native';
import styles from '../../assets/styles';

/**
 * Display User image
 */
export default class UserImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loader: true,
            noImage: false
        };
    }

    componentDidMount() {
        this.setState({ loader: false, noImage: false });
    }

    onLoadStart = () => {
        console.log('OrganisationImageChildComponent onLoad', this.props.source)
        this.setState({ loader: true });
    };

    onEnd = () => {
        console.log('OrganisationImageChildComponent onEnd', this.props.source)
        this.setState({ loader: false });
    };

    onError = (error) => {
        console.log('OrganisationImageChildComponent onError', this.props.source)
        this.setState({ loader: false, noImage: true });
    };

    render() {
        console.log('OrganisationImageChildComponent', this.state.noImage, this.props.source)
        return (
            <View>
                {this.state.loader &&
                    <ActivityIndicator style={styles.loaderImg} animating={true} size='large' color='#000' />
                }
                <Image
                    source={{ uri: this.props.source }}
                    onLoadStart={this.onLoadStart}
                    onLoad={this.onEnd}
                    onError={this.onError}
                    style={this.props.style ? this.props.style : innerStyle.userImg}
                />
            </View>
        );
    }
}
const innerStyle = StyleSheet.create({
    userImg: {
        width: Platform.OS === 'ios' ? 33 : 30,
        height: Platform.OS === 'ios' ? 33 : 30,
        borderRadius: 16,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center'
    },
});
