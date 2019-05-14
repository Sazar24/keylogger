// const fs = require('fs-extra')
import * as fs from 'fs-extra';
import IKeyEvent from './../types/keyEvent.interface';

export default class FileWriter {
    logPath: string = "./output/loggerTest.txt";
    fileWritesCounter: number = 0;

    saveLogs(keysLog: IKeyEvent[]) {
        console.log("attempting to write to the file");
        const dataToSafe: any = this.converArrayOfLogsToReadableText(keysLog);

        fs.writeFile(this.logPath, dataToSafe, (err) => {
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
        let result: string;
        const originalKey_rawCode: number= originalKeyLog.rawcode;
        const originalKey_asChar: string= YOU_ARE_HERE


        return result;
    }


}