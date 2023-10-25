import { useState } from "react";

export const useTabs = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [activeTabs, setActiveTabs] = useState(
    new Array(6).fill(false).map((_, index) => index === 0)
  );

  const handleChange = (index) => {
    setTabIndex(index);
  };

  const tabChange = (index) => {
    setTabIndex(index);

    const newActiveTabs = activeTabs.map((_, i) => i === index);
    setActiveTabs(newActiveTabs);
  };

  return {
    tabIndex,
    setTabIndex,
    activeTabs,
    handleChange,
    tabChange,
  };
};
