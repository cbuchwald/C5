export const updateObject = (
  oldObject: any,
  updatedProperties: {
      [key: string]: any;
    }
) => {
  return {
    ...oldObject,
    ...updatedProperties
  }
}
