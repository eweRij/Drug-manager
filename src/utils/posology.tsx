export const givePosology = (value: number | undefined): string => {
    let result;
    if (value === 1) {
      result = "in the morning.";
    } else if (value === 2) {
      result = "at noon.";
    } else {
      result = "in the evening";
    }
    return result;
  };