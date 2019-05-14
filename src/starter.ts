import HotkeysListener from "./services/hotkeysListener.service";

const hotkeysListener = new HotkeysListener();

export default class Starter {
    
    run() {
        // this.enableHotkeys();
        hotkeysListener.logEveryStroke();


    }
    // enableHotkeys() { }

    // toggleLoggerOn() {
    // }

    // toggleLoggerOff() {
    // }

}