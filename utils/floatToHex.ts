const floatToHex = (float: number): string => {
  let result;
  const getHex = (i) => ('00' + i.toString(16)).slice(-2);
  const view = new DataView(new ArrayBuffer(4));
  view.setFloat32(0, float);
  
  result = Array.apply(null, { length: 4 }).map((_, i) => getHex(view.getUint8(i))).join('');
  return result
}

export default floatToHex;