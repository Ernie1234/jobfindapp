import React from "react";
import { Image, TouchableOpacity } from "react-native";

import styles from "./screenheader.style";

type headIconProps = {
  dimension: string;
  iconUrl: string;
  handlePress?: () => void;
};

const ScreenHeaderBtn = ({
  dimension,
  iconUrl,
  handlePress,
}: headIconProps) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
