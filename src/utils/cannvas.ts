import { WatermarkProps } from '@hirohe/react-watermark/build/Watermark';
import { calcTextRenderedRect } from './calculate';

export function generateSvg(
    options: WatermarkProps,
) {
    const {
        text,
        textColor,
        textSize,
        fontFamily = '',
        lineHeight,
        multiline,
        opacity,
        gutter = 0,
        rotate,
    } = options;
    const rect = calcTextRenderedRect(text, fontFamily, textSize);
    const size =
        Math.sqrt(rect.width * rect.width + rect.height * rect.height) +
        gutter * 2;
    const center = size / 2;

    let textContent = text;
    if (multiline) {
        const texts = text.split('\n').map((textByLine, index) => {
            return `<tspan x='50%' dy='${
                index === 0 ? '0' : lineHeight
            }'>${textByLine}</tspan>`;
        });
        textContent = texts.join('');
    }

    const textEl = `<text fill='${textColor}' x='50%' y='50%' font-size='${textSize}' text-anchor='middle' font-family='${fontFamily}' transform='rotate(${rotate} ${center} ${center})' opacity='${opacity}'>${textContent}</text>`;

    return `<svg width='${size}' height='${
        size / 1.5
    }' xmlns='http://www.w3.org/2000/svg'>${textEl}</svg>`;
}
