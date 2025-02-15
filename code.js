function divideAndConquerSum(a) {
    return recur(a);
}

// Going for a base case of either 0 or 1 length array, otherwise recur.
function recur(a) {
    if (a.length === 0) {
        return 0;
    } else if (a.length === 1) {
        return a[0];
    }

    const cutSize = Math.ceil(a.length/3);
    const left = a.slice(0, cutSize);
    const mid = a.slice(cutSize, cutSize * 2);
    const right = a.slice(cutSize * 2);

    return recur(left) + recur(mid) + recur(right);
}
