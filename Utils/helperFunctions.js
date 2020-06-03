export const getMSBarcodeCode = (_data) => {
  let result = "";
  const arrayData = _data.property_groups[1].properties;
  for (let i = 0; i < arrayData.length; i++) {
    const element = arrayData[i];
    if (element.id == "UPC (Master)") {
      result = element.values[0].id;
    }
  }
  return result;
};

// console.log("itemData", itemData.property_groups);
