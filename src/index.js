module.exports = function toReadable (number) {
    const units = number % 10;
    const tens = (number % 100 - units) / 10;
    const hundreds = Math.floor(number / 100);
    var units1 = '';
    var tens1 = '';
    var hundreds1 = '';
    if (tens !== 1)
    switch (units) {
        case 0:
            units1 = 'zero';
            break;
        case 1:
            units1 = 'one';
            break;
        case 2:
            units1 = 'two'
            break;
        case 3:
            units1 = 'three'
            break;
        case 4:
            units1 = 'four'
            break;
        case 5:
            units1 = 'five'
            break;
        case 6:
            units1 = 'six'
            break;
        case 7:
            units1 = 'seven'
            break;
        case 8:
            units1 = 'eight'
            break;
        case 9:
            units1 = 'nine'
            break;
    }

    if (tens === 1)
        switch (units) {
            case 1:
                units1 = 'eleven';
                break;
            case 2:
                units1 = 'twelve'
                break;
            case 3:
                units1 = 'thirteen'
                break;
            case 4:
                units1 = 'fourteen'
                break;
            case 5:
                units1 = 'fifteen'
                break;
            case 6:
                units1 = 'sixteen'
                break;
            case 7:
                units1 = 'seventeen'
                break;
            case 8:
                units1 = 'eighteen'
                break;
            case 9:
                units1 = 'nineteen'
                break;
        }

    switch (tens) {
        case 1:
            tens1 = 'ten';
            break;
        case 2:
            tens1 = 'twenty'
            break;
        case 3:
            tens1 = 'thirty'
            break;
        case 4:
            tens1 = 'forty'
            break;
        case 5:
            tens1 = 'fifty'
            break;
        case 6:
            tens1 = 'sixty'
            break;
        case 7:
            tens1 = 'seventy'
            break;
        case 8:
            tens1 = 'eighty'
            break;
        case 9:
            tens1 = 'ninety'
            break;
        case 0:
            tens1 = ''
            break;
    }

    switch (hundreds) {
        case 1:
            hundreds1 = 'one hundred';
            break;
        case 2:
            hundreds1 = 'two hundred'
            break;
        case 3:
            hundreds1 = 'three hundred'
            break;
        case 4:
            hundreds1 = 'four hundred'
            break;
        case 5:
            hundreds1 = 'five hundred'
            break;
        case 6:
            hundreds1 = 'six hundred'
            break;
        case 7:
            hundreds1 = 'seven hundred'
            break;
        case 8:
            hundreds1 = 'eight hundred'
            break;
        case 9:
            hundreds1 = 'nine hundred'
            break;
        case 0:
            hundreds1 = ''
            break;
    }
    if (hundreds === 0) {
        if ((tens === 1 && units !== 0) || tens === 0) {
            return units1;
        } else if (units === 0) {
            return tens1;
        } else {
            return tens1 + ' ' + units1;
        }
    } else if (tens !== 0 && units === 0) {
        return hundreds1 + ' ' + tens1;
    } else if (tens === 0) {
        return hundreds1 + ' ' + units1;
    } else  {
        return hundreds1 + ' ' + tens1 + ' ' + units1;
    }


};

