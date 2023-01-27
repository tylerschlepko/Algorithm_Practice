var restoreIpAddresses = function(s) {
    let arr = []
    if (s.length > 13 || s.contains([/[^0-9.]/g] === true)){
        return arr
    }
};
let s = "25525511135"
console.log(s.includes([/[^0-9.]/g]))
// Output: ["255.255.11.135","255.255.111.35"]
// For example, "0.1.2.201" and "192.168.1.1" are valid IP addresses, 
// but "0.011.255.245", "192.168.1.312" and "192.168@1.1" are invalid IP addresses.