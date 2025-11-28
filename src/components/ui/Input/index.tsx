/**
 * Input Component
 * 
 * Reusable text input with optional label, character limit, and multiline support.
 * Includes character counter and validation capabilities.
 */

import styles from "./style";
import {
  TextInput,
  View,
  Text,
  ViewStyle,
  TextInputProps,
} from "react-native";

interface InputProps extends TextInputProps {
  value:string
  label?: string;
  containerStyle?: ViewStyle;
  validator?: (value: string) => boolean;
  maxChars?: number;
}

const Input: React.FC<InputProps> = ({
  value,
  onChangeText,
  style,
  label,
  containerStyle,
  maxChars,
  ...props
}) => {
  const handleChangeText = (text: string) => {
    // update the text is within limit
    if (!maxChars || text.length <= maxChars) {
      onChangeText && onChangeText(text);
    }else if(maxChars && text.length > maxChars){
      onChangeText && onChangeText(text.slice(0,maxChars))
    }
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        value={value}
        onChangeText={handleChangeText}
        placeholder={props.placeholder}
        style={[
          styles.input,
          props.multiline && styles.multiline,
          style,
        ]}
        placeholderTextColor="#999"
        textAlignVertical={props.multiline ? 'top' : 'center'}

        {...props}
      />
      {maxChars !== undefined && (
        <Text style={styles.charCount}>{`${value.length}/${maxChars}`}</Text>
      )}
    </View>
  );
};

export default Input;
