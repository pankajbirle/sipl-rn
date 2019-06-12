import React from "react";
import {
  Text,
  Item,
  Picker,
  Icon,
  Header,
  Left,
  Right,
  Body,
  Title,
  Button
} from "native-base";
import { View, StyleSheet, Dimensions, Platform } from "react-native";
import { LabelComponent } from "./LabelComponent";
import { CustomIcon } from "../../utils/CustomIcon";

const PickerBox = ({
  style,
  itemStyle,
  selectIconStyle,
  pickerStyle,
  iosIcon,
  mode = "dropdown",
  renderHeader,
  placeholder,
  iosHeader,
  headerStyle,
  itemTextStyle,
  supportedOrientations,
  headerBackButtonText,
  headerBackButtonStyle,
  placeholderIconColor,
  mandatory,
  onValueChange,
  renderDropdownValues,
  optionArray,
  value,
  labelTxt,
  itemStyleMain,
  pikerWrap,
  isSubmitted = false,
  enabled = true,
  isFieldInError = false,
  fieldErrorMessage,
  width = 2
}) => {
  return (
    <View
      style={[innerStyel.itemWarpper, pikerWrap]}
      error={value == "" && isSubmitted == true}
      success={!(value == "") && isSubmitted == true}
    >
      <LabelComponent label={labelTxt} mandatory={mandatory} />
      <Item style={[innerStyel.inputWarpper, itemStyleMain]}>
        <Picker
          style={[
            {
              fontSize: 14,
              color: "#2C3138",
              fontFamily: fontRegular,
              paddingLeft: 0,
              paddingRight: 0,
              width: Dimensions.get("window").width / width - 28,
              fontWeight: "500",
              height: 34,
              marginRight: Platform.OS === "ios" ? (width == 1 ? 0 : -0) : -40,
              marginLeft:
                Platform.OS === "ios"
                  ? width == 2
                    ? -0
                    : -0
                  : width == 1
                  ? -6
                  : -8
            },
            pickerStyle
          ]}
          isSubmitted={isSubmitted}
          selectedValue={value}
          value={value}
          onValueChange={onValueChange}
          enabled={enabled}
          mode={mode}
          placeholderIconColor={placeholderIconColor}
          renderHeader={renderHeader}
          placeholder={placeholder}
          placeholderStyle={innerStyel.placeholderStyle}
          iosHeader={iosHeader}
          headerStyle={headerStyle}
          textStyle={innerStyel.textStyle}
          itemTextStyle={{
            ...itemTextStyle,
            fontSize: 14,
            fontFamily: fontRegular
          }}
          itemStyle={{ ...itemStyle, fontSize: 14, fontFamily: fontRegular }}
          supportedOrientations={supportedOrientations}
          headerBackButtonText={headerBackButtonText}
          headerBackButtonStyle={headerBackButtonStyle}
          renderHeader={backAction => (
            <Header style={innerStyel.pickerHeader}>
              <Left>
                <Button transparent onPress={backAction}>
                  <Icon
                    name="arrow-back"
                    style={[innerStyel.whiteColor, innerStyel.arrowBackBtn]}
                  />
                </Button>
              </Left>
              <Body style={innerStyel.pcikerBodyStyle}>
                <Title style={innerStyel.whiteColor}>Select</Title>
              </Body>
              <Right />
            </Header>
          )}
        >
          {optionArray.map((val, i) => {
            return <Picker.Item key={i} value={val.value} label={val.label} />;
          })}
        </Picker>
        <View
          style={[
            innerStyel.arrowWrapper,
            {
              marginLeft:
                Platform.OS === "ios"
                  ? width == 2
                    ? -11
                    : -17
                  : width == 1
                  ? -15
                  : -33
            },
            selectIconStyle
          ]}
        >
          <CustomIcon
            name={"dropdown-white-icon"}
            style={innerStyel.dropIcon}
          />
          {/* <Text style={innerStyel.arrow}>&#9660;</Text> */}
        </View>
      </Item>
      {isFieldInError && (
        <Text style={innerStyel.errorMsg}>{fieldErrorMessage}</Text>
      )}
    </View>
  );
};

const innerStyel = StyleSheet.create({
  itemWarpper: {
    marginLeft: 0,
    marginBottom: 15
  },
  textStyle: {
    fontSize: 14,
    color: "#2C3138",
    fontFamily: fontRegular,
    paddingLeft: 0,
    paddingRight: 0
  },
  inputWarpper: {
    flexDirection: "row",
    borderBottomColor: "#738A9D",
    borderBottomWidth: 1,
    width: "99.4%",
    fontFamily: fontRegular
  },
  errorTextStyle: {
    fontSize: 12,
    marginLeft: 0,
    marginRight: 15,
    color: "red",
    fontFamily: fontRegular
  },
  placeholderStyle: {
    color: "#2C3138",
    fontSize: 15,
    padding: 0,
    fontFamily: fontRegular
  },
  pickerItem: {
    fontSize: 14,
    height: 34,
    color: "red",
    fontFamily: fontRegular
  },
  arrowWrapper: {
    height: 34,
    marginLeft: Platform.OS === "ios" ? -15 : -33,
    alignItems: "flex-end",
    justifyContent: "center",
    backgroundColor: "#f6f8fa",
    position: "relative"
  },
  arrow: {
    textAlign: "center",
    color: "red"
  },
  errorMsg: {
    fontSize: 12,
    color: "red",
    marginTop: 5,
    marginLeft: 3,
    fontFamily: fontRegular
  },
  pickerHeader: { backgroundColor: "#FFC30D" },
  whiteColor: {
    color: "#ffffff"
  },
  pcikerBodyStyle: { flex: 3 },
  dropIcon: { fontSize: 12, color: "#87939F" },
  arrowBackBtn: {
    position: "relative",
    top: 3
  }
});

export default PickerBox;
