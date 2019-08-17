import Costume from '@/models/entities/Costume';

export default interface User {
    name: string;
    level: number;
}

export function getCostumeByLevel(level: number) {
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
