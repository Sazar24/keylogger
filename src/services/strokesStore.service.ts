import IKeyEvent from './../types/keyEvent.interface';
import FileWriter from './fileWriter.service';

const fileWriter: FileWriter = new FileWriter();

export default class StrokesStore {
    capturedKeys: IKeyEvent[] = []
    packageSize: number = 10;

    captureKeyAndStorePackagesToFile(keyEventCaptured: IKeyEvent) {
        this.captureKey(keyEventCaptured);
        this.saveKeysPackageToFile(this.packageSize);
    }

    captureKey(keyEventCaptured: IKeyEvent) {
        this.capturedKeys.push(keyEventCaptured);
    }

    saveKeysPackageToFile(packageAmmount: number) {
        if (this.isPackageSizeReached(packageAmmount)) {
            fileWriter.saveLogs(this.capturedKeys);
        };
    }

    isPackageSizeReached(packageAmmount: number): boolean {
        let result: boolean;
        if (this.capturedKeys.length % packageAmmount === 0) {
            result = true
        }
        else result = false;
        return result;
    }

}