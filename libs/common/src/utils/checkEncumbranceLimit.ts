export const checkEncumbranceLimit = (value?: number) => {
  if (value) {
    return ` Disabled at ${value} encumbrance`;
  }

  return "";
};
