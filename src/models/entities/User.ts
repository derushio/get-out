import Costume from '@/models/entities/Costume';

export default interface User {
    name: string;
    gender: string;
    age: string;

    exp: number;
}

export function getLevelByExp(exp: number) {
    let level = 0;
    if (1000 > exp) {
        level = 1;
    } else if (2000 > exp) {
        level = 2;
    } else if (3000 > exp) {
        level = 3;
    } else if (4000 > exp) {
        level = 4;
    }
    return level;
}

export function getCostumeByExp(exp: number) {
    const level = getLevelByExp(exp);

    const costume = {
        sunglasses: false,
        mask: false,
        earphone: false,
    } as Costume;

    switch (level) {
        case (1): {
            costume.sunglasses = true;
            costume.mask = true;
            costume.earphone = true;
            break;
        }

        case (2): {
            costume.sunglasses = true;
            costume.mask = true;
            break;
        }

        case (3): {
            costume.mask = true;
            break;
        }

        case (4): {
            break;
        }

        case (5): {
            // TODO: おしゃれになる
            break;
        }
    }

    return costume;
}
