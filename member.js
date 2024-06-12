function skillsMember() {
    var member = {
        name: 'John Doe',
        age: 25,
        skills: ['JavaScript', 'React', 'Node', 'Python'],
        details: function() {
            this.skills.forEach((skill) => {
                console.log(`${this.name} knows ${skill}`);
            });
        }
    };
    member.details();
}