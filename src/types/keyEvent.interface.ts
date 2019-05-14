export default interface IKeyEvent {
    shiftKey?: boolean,
    altKey: boolean,
    ctrlKey: boolean,
    metaKey: boolean,
    keychar: number,
    rawcode: number,
    keycode?: number,
    type?: string,
}