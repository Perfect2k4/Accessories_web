import React, { useState } from "react";
import "configs/fontIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UsePasswordToggle = () => {
  const [visible, setVisible] = useState(false);

  const Icon = (
    <FontAwesomeIcon
      icon={visible ? "eye-slash" : "eye"}
      onClick={() => setVisible((visible) => !visible)}
    />
  );

  const InputType = visible ? "text" : "password";

  return [InputType, Icon];
};

export default UsePasswordToggle;
