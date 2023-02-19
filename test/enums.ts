// can have may different types of resources, so can create an enum for them 

enum HeroType { MARKSMAN, TANK, MAGE, FIGHTER, SUPPORT, ASS }

interface Hero<T> {
    uid: number;
    heroType: HeroType;
    skills: T;
}

const natan: Hero<Object> = {
    uid: 1,
    heroType: HeroType.MARKSMAN,
    skills: {first: 'shooting thing', second: 'push thing', ult: 'double'}
}

// tuples create strict order for types in an array 

let tup: [string, number, boolean] = ['hanabi', 3, true]
