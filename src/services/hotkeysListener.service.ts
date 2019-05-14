import * as ioHook from 'ioHook';
import IKeyEvent from './../types/keyEvent.interface';
import StrokesStore from './strokesStore.service';
// this library works (as hotkey listener) but its documentation is so poor, that i cant determine proper way to register new shortcuts. 
// I`ve managed to made it anyway, but not in recommended way, most propably.

const strokesStore = new StrokesStore();

export default class HotkeysListener {
    // myHotkey: IKeyEvent = {
    //     ctrlKey: false, altKey: false, keychar: 27, rawcode: 27, metaKey: false,
    // }
    // terminateHotkey: IKeyEvent = {
    //     ctrlKey: true, altKey: false, keychar: 27, rawcode: 27, metaKey: false,
    // }

    // async customRegisterHotkey(hotkey: IKeyEvent, callback: () => void) {
    //     ioHook.on("keypress", async (event: IKeyEvent) => {
    //         if (event["altKey"] === hotkey.altKey
    //             && event["ctrlKey"] === hotkey.ctrlKey
    //             && event["keychar"] === hotkey.keychar
    //             && event["rawcode"] === hotkey.rawcode
    //             && event["metaKey"] === hotkey.metaKey
    //         ) {
    //             console.log(`+++ You have pressed registered hotkey +++ `);
    //             callback();
    //         }
    //     })
    // }

    async logEveryStroke() {
        console.log("logging out...");
        ioHook.start(false);

        ioHook.on("keypress", async (event: IKeyEvent) => {
            console.log("you pressed a key: " + JSON.stringify( event ));
            strokesStore.captureKey(event);
        });
    }
}