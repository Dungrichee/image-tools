export const financial = (x: string | number) => {
    if (!x) return 0;

    const result = Number.parseFloat(`${x}`).toFixed(2);
    return Number(result);
};

export const calculatePercentage = (x: number, percentage: number) => {
    if (!x || !percentage) return 0;
    const newPercentage = 100 - percentage;
    return (x * newPercentage) / 100;
};

export function calcTextRenderedRect(
    text: string,
    fontFamily: string,
    fontSize?: number,
): DOMRect {
    const span = document.createElement('span');
    span.innerText = text;
    span.style.fontSize = fontSize + 'px';
    span.style.fontFamily = fontFamily;
    span.style.visibility = 'hidden';
    document.body.appendChild(span);
    const rect = span.getBoundingClientRect();
    document.body.removeChild(span);
    return rect;
}
