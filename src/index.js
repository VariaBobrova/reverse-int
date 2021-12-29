module.exports = function reverse(n) {
    let reversed = 0;
    n = Math.abs(n);
    function r(n) {
        while (n) {
            let len = (n.toString()).length;
            reversed += (n % 10) * 10 ** (len - 1);
            n = Math.floor(n / 10);
            return r(n);
        }
    }
    r(n);
    return reversed;
}