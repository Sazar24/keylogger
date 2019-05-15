import IKeyEvent from './../types/keyEvent.interface';

export default class RawCodeTranslator {
    translateToChar(rawCode: number): string {
        let result: string;
        switch (rawCode) {
            case 13:
                result = "{enter}";
                break;
            case 27:
                result = "{esc}";
                break;
            case 32:
                result = "{space}";
                break;
            case 48:
                result = "{0}";
                break;
            case 49:
                result = "{1}";
                break;
            case 50:
                result = "{2}";
                break;
            case 51:
                result = "{3}";
                break;
            case 52:
                result = "{4}";
                break;
            case 53:
                result = "{5}";
                break;
            case 54:
                result = "{6}";
                break;
            case 55:
                result = "{7}";
                break;
            case 56:
                result = "{8}";
                break;
            case 57:
                result = "{9}";
                break;
            default:
                result = String.fromCharCode(rawCode);
                break;
        }
        return result;
    }

    translateAllChars(keyLogs: IKeyEvent[]): string {
        let result: string = '';



        keyLogs.forEach((element: IKeyEvent) => {
            const rawCodeAsChar: string = this.translateToChar(element.rawcode);
            result += rawCodeAsChar;
        });

        return result;
    }
}