export const financial = (x: string | number) => {
    if (!x) return 0;

    const result = Number.parseFloat(`${x}`).toFixed(2);
    return Number(result);
};

export const calculatePercentage = (x: number, percentage: number) => {
    if (!x || !percentage) return 0;
    const newPercentage = 100 - percentage
    return (x * newPercentage) / 100;
};
