export const assignComma = (num: number | null | undefined) => {
            if (num) {
                const regx = new RegExp("[0-9]{1,3}", "gi");
                const float_num = (num.toFixed(4)+"").split(".");
                let numStr = (float_num[0] + "").split("").reverse().join("");
                let retStr = numStr.match(regx)?.join(",").split("").reverse().join("");
                return float_num.length > 1 ? retStr + "." + float_num[1] : retStr;
            }
            return "0";
}
