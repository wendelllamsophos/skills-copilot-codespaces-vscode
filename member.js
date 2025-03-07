function skillsMember() {
  var member = {
    name: 'John',
    age: 30,
    skills: ['HTML', 'CSS', 'JS'],
    // Method
    showSkills: function() {
      this.skills.forEach(function(skill) {
        console.log(`${this.name} knows ${skill}`);
      });
    }
  };

  member.showSkills();
}