import IKeyEvent from './../types/keyEvent.interface';
import FileWriter from './fileWriter.service';

const fileWriter :FileWriter = new FileWriter();

export default class StrokesStore {
    capturedKeys: IKeyEvent[] = []

    captureKey(keyEventCaptured: IKeyEvent) {
        this.capturedKeys.push(keyEventCaptured);
        this.saveManyKeysAtOnce(50);


    }

    saveManyKeysAtOnce(packageAmmount: number) {
        if (this.capturedKeys.length % packageAmmount === 0 ){
            fileWriter.saveLogs(this.capturedKeys);

        }

    }

}