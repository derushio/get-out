import Costume from '@/models/entities/Costume';

export default interface User {
    name: string;
    gender: string;
    age: string;

    exp: number;
}

export const avators = {
    1: require('@/assets/imgs/avator/level1.png'),
    2: require('@/assets/imgs/avator/level2.png'),
    3: require('@/assets/imgs/avator/level3.png'),
    4: require('@/assets/imgs/avator/level4.png'),
    5: require('@/assets/imgs/avator/level5.png'),
};

export const levelExp = {
    1: 1000,
    2: 2000,
    3: 3000,
    4: 4000,
} as { [key: number]: number };

export function getLevelByExp(exp: number) {
    let level;
    if (levelExp[1] > exp) {
        level = 1;
    } else if (levelExp[2] > exp) {
        level = 2;
    } else if (levelExp[3] > exp) {
        level = 3;
    } else if (levelExp[4] > exp) {
        level = 4;
    }
    level = 5;

    return level;
}

export function getExpPercent(exp: number) {
    const level = getLevelByExp(exp);
    const prevExp = levelExp[level - 1];
    const nextExp = levelExp[level];
    if (nextExp == null) {
        return 0;
    }

    const dExp = exp - prevExp;
    const percent = (dExp / (nextExp - prevExp)) * 100;
    return percent;
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
            costume.mask = true;
            costume.earphone = true;
            break;
        }

        case (3): {
            costume.earphone = true;
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
