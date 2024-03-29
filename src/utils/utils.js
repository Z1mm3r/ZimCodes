
export const px = (string) => `${string}px`

export const em = (string) => `${string}em`

export const rem = (string) => `${string}rem`

export const vw = (string) => `${string}vw`

export const vh = (string) => `${string}vh`

export const percent = (string) => `${string}%`

export const deg = (string) => `${string}deg`

export const calcLerp = function (v0, v1, t) {
    //this is calculating our lerp value.
    if (t < 0) {
        return 1
    }

    let max = v1 - v0

    if (t >= max) {
        return 0
    }

    return (max - t) / max

}

export const lerp = function (v0, v1, t) {
    return v0 + t * (v1 - v0);
}

export const selectStyles = function (styleClass) {
    return "." + CSS.escape(styleClass);
}