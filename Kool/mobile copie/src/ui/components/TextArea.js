import * as React from "react";
import {
    View,
    TextInput,
    Text,
    TextInputProps,
    StyleProp,
    ViewStyle,
    TextStyle,
} from "react-native";
/**
 * ? Local Imports
 */
// import styles, {_charCountStyle} from "./TextArea.style";

// type CustomStyleProp = StyleProp;
// type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;


const TextArea = ({
                      style,
                      textInputStyle,
                      inputRef,
                      maxCharLimit = 200,
                      defaultCharCount = 0,
                      charCountColor = "#ccc",
                      exceedCharCountColor = "red",
                      onChangeText,
                      maxCharTextStyle,
                      ...rest
                  }) => {
    const [charCount, setCharCount] = React.useState(defaultCharCount || 0);

    const handleChangeText = (text) => {
        setCharCount(text.length);
        if (onChangeText) onChangeText(text);
    };

    const renderCharCount = () => {
        if (!maxCharLimit) return null;

        return (
            <Text
                ref={inputRef}
                style={[
                    // _charCountStyle(
                    //     charCount > maxCharLimit ? exceedCharCountColor : charCountColor,
                    // ),
                    maxCharTextStyle,
                ]}
            >{`${charCount}/${maxCharLimit}`}</Text>
        );
    };

    return (
        <View style={[style]}>
            <TextInput
                multiline
                {...rest}
                style={[textInputStyle]}
                onChangeText={handleChangeText}
            />
            {renderCharCount()}
        </View>
    );
};

export default TextArea;
