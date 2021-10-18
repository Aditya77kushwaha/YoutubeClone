import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";

function CustomHeaderButton(props) {
  return (
    <HeaderButton
      {...props}
      IconComponent={props.iconSet}
      iconSize={props.iconSize}
      color={props.color}
    />
  );
}

export default CustomHeaderButton;
