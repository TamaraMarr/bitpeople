class Person {
    constructor(data) {
        this.id = data.id.value || (Math.random() * 100000000);
        this.name = `${data.name.first} ${data.name.last}`;
        this.dob = data.dob;
        this.email = data.email;
        this.gender = data.gender;
        this.photo = data.picture.large
    }
}

export default Person;