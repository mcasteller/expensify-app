(fullName) => fullName.split(' ')[0]

const getFirstName = (fullName) => {
    return fullName.split(' ')[0]
} 

const multiplier = {
    numbers: [1,2,3],
    multiplyBy: 5,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy)
    } 

}