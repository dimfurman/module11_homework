import { format_date } from "../script.js";
import { input_plus } from "../script.js";

describe('test', () => {
    it('formate_date', () => {
        expect(format_date('Sun Mar 12 2023 13:20:01 GMT+0300')).toBe('12.03.2023');
        expect(format_date('1678616401000')).toBe('12.03.2023');
        expect(format_date('Mar 12 2023')).toBe('12.03.2023');
    });

    it('input plus', ()=>{
        expect(input_plus('1+2')).toBe(3);
        expect(input_plus('1+ -2')).toBe(-1);
        expect(input_plus('1 + 2')).toBe(3);
        expect(input_plus('1 +2')).toBe(3);
        expect(input_plus('- 1 + - 2')).toBe(-3);
        expect(input_plus('1 - 2')).toBe('Неверное выражение');
        expect(input_plus('a+b')).toBe(NaN);
    })
});


