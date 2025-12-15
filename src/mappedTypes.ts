type man1 = {
    hight: number,
    width: number
};
type man2 = {
    hight: string,
    width: string
};
type loopMan<T> = {
    [key in keyof T]: T[key];
}

const thisMan: loopMan<{ hight: number, width: string }> = {
    hight: 58,
    width: "99"
}