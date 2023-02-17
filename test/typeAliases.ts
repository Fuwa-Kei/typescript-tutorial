type StringOrNum = string | number;
type ObjWithName = { name: string, uid: StringOrNum };

// can now use these types without having to write them out everytime

const logDetails = (uid: StringOrNum, item: string) => {
    console.log(`${item} has a uid of ${uid}`)
}

const greetings = (user: ObjWithName) => {
    console.log(`${user.name}`)
} 