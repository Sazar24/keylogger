// const fs = require('fs-extra')
import * as fs from 'fs-extra';
import IKeyEvent from './../types/keyEvent.interface';

export default  class FileWriter{
    logPath :string = "";
    fileCounter:number;

    saveLogs(keysLog:IKeyEvent[]){
        for (let i=0; i < keysLog.length; i++ ){

        }
        
    }
    
    buildReadableLine(keyStrokeInfo:IKeyEvent):string{


        return
    }

    convertKeyRawCodeToChar(){

    }

}