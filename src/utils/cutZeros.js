const cutZeros = (value) => {
    const copy = value.slice(-4);
    if (copy === '.000') {
        return value.slice(0, value.length - 4)
    }
    return value;
}

export default cutZeros;
