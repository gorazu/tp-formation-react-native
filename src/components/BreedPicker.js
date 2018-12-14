import React from "react";
import { Picker } from "react-native";
import { breeds } from "../misc/breeds";

const BreedPicker = ({ value, onChange }) => (
  <Picker
    selectedValue={value}
    style={{ width: 400 }}
    onValueChange={value => onChange(value)}
  >
    {breeds.map(breed => (
      <Picker.Item label={breed.name} value={breed.key} />
    ))}
  </Picker>
);

export default BreedPicker;
