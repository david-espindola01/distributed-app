class User {
    constructor(name, weight, height, gender) {
        this.name = name;
        this.weight = weight;
        this.height = height;
        this.gender = gender
    }

    calculateIMC() {
        return this.weight / (this.height * this.height);
    }
}

export default User;
