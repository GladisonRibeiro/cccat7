// @ts-nocheck
export function validateCPF (cpf) {
	if (cpf === null) {
        return false;
	}
    if (cpf === undefined) {
        return undefined;
    }
    if (cpf.length < 11 || cpf.length > 14) {
        return false;
    }
    cpf=cpf
        .replace('.','')
        .replace('.','')
        .replace('-','')
        .replace(" ","");    
    if (cpf.split("").every(c => c === cpf[0])) {
        return false;        
    }
    try{  
        let firstDigitAccumulator = 0;
        let secondDigitAccumulator = 0;
        let firstDigitChecker = 0;
        let secondDigitChecker = 0;
        let restOfDivision = 0; 
        let digit;
        let generatedCheckDigits;

        for (let multiplier = 1; multiplier < cpf.length - 1; multiplier++) {
            digit = parseInt(cpf.substring(multiplier -1, multiplier));
            if (isNaN(digit)) throw new Error('Invalid format');
            firstDigitAccumulator = firstDigitAccumulator + ( 11 - multiplier ) * digit;
            secondDigitAccumulator = secondDigitAccumulator + ( 12 - multiplier ) * digit;
        }

        restOfDivision = (firstDigitAccumulator % 11);  
        firstDigitChecker = (restOfDivision < 2) ? 0 : 11 - restOfDivision;
        
        secondDigitAccumulator += 2 * firstDigitChecker;
        restOfDivision = (secondDigitAccumulator % 11);
        secondDigitChecker = (restOfDivision < 2)  ? 0 : 11 - restOfDivision;

        let checkDigits = cpf.substring(cpf.length-2, cpf.length);  
        generatedCheckDigits = `${firstDigitChecker}${secondDigitChecker}`;
        return checkDigits == generatedCheckDigits;
    }catch (e){    
        return false;  
    }
}