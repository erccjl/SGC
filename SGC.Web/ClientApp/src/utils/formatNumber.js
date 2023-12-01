export const formatNumber = (value) => {
    if (typeof value !== 'number')
        return (0).toFixed(2);
    return (Math.round(value * 100) / 100).toFixed(2);
}