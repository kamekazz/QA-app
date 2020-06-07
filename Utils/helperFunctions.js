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

export const getAlias = (_data) => {
  let result = "";
  const arrayData = _data.property_groups[1].properties;
  for (let i = 0; i < arrayData.length; i++) {
    const element = arrayData[i];
    if (element.id == "Alias") {
      result = element.values[0].id;
    }
  }
  return result;
};

export const getImageSalsify = (_data) => {
  let result = "";
  if (_data.profile_asset) {
    const obyData = _data.profile_asset.large_url;
    result = obyData;
  }
  return result;
};

export const getWeightAndCubic = (_data) => {
  let resultCubic = "";
  let resultWeight = "";
  const arrayData = _data.property_groups[2].properties;
  for (let i = 0; i < arrayData.length; i++) {
    const element = arrayData[i];
    if (element.id == "Cube (Master)") {
      resultCubic = element.values[0].id;
    }
    if (element.id == "Weight (Master)") {
      resultWeight = element.values[0].id;
    }
  }
  return { resultCubic, resultWeight };
};

export const getMS_Quantity = (_data) => {
  let result = "";
  const arrayData = _data.property_groups[1].properties;
  for (let i = 0; i < arrayData.length; i++) {
    const element = arrayData[i];
    if (element.id == "Master Pack") {
      result = element.values[0].id;
    }
  }
  return result;
};
