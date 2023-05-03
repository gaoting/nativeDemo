import React, {
  Keyboard,
  TextInput,
  TextInputProps,
  TouchableWithoutFeedback,
} from 'react-native';

const Input = (props: TextInputProps) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <TextInput {...props} />
    </TouchableWithoutFeedback>
  );
};

export default Input;
