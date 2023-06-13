export const assignComma = (num: number | null | undefined) => {
  if (num) {
    const regx = new RegExp("[0-9]{1,3}", "gi");
    let numStr = (num + "").split("").reverse().join("");
    let retStr = numStr.match(regx)?.join(",").split("").reverse().join("");
    return retStr;
  }
  return "";
}
