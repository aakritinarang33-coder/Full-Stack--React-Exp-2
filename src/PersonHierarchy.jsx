import React, { useState } from 'react';
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  displayInfo() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
  introduce() {
    return `Hi, I'm ${this.name}`;
  }
}
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }
  displayInfo() {
    return `${super.displayInfo()}, Grade: ${this.grade}`;
  }
  introduce() {
    return `${super.introduce()} and I'm a student in grade ${this.grade}`;
  }
  study() {
    return `${this.name} is studying hard!`;
  }
}
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }
  displayInfo() {
    return `${super.displayInfo()}, Subject: ${this.subject}`;
  }
  introduce() {
    return `${super.introduce()} and I teach ${this.subject}`;
  }
  teach() {
    return `${this.name} is teaching ${this.subject}`;
  }
}
export default function PersonHierarchyDemo() {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const person = new Person("John Doe", 30);
  const student = new Student("Alice Smith", 16, "10th Grade");
  const teacher = new Teacher("Mr. Johnson", 45, "Mathematics");
  const people = [
    { obj: person, type: "Person", color: "person-card" },
    { obj: student, type: "Student", color: "student-card" },
    { obj: teacher, type: "Teacher", color: "teacher-card" }
  ];
  return (
    <div className="container">
      <h1 className="title">Person Class Hierarchy Demo</h1>
      <div className="cards-grid">
        {people.map((person, index) => (
          <div
            key={index}
            className={`card ${person.color}`}
            onClick={() => setSelectedPerson(person)}
          >
            <h3 className="card-title">{person.type}</h3>
            <p className="card-info">{person.obj.displayInfo()}</p>
            <button className="card-button">
              Click to interact →
            </button>
          </div>
        ))}
      </div>
      {selectedPerson && (
        <div className="interaction-panel">
          <h3 className="interaction-title">
            {selectedPerson.type}: {selectedPerson.obj.name}
          </h3>          
          <div>
            <div className="method-result">
              {selectedPerson.obj.displayInfo()}
            </div>
            <div className="method-result">
              {selectedPerson.obj.introduce()}
            </div>
            {selectedPerson.obj instanceof Student && (
              <div className="method-result student-method">
                {selectedPerson.obj.study()}
              </div>
            )}
            {selectedPerson.obj instanceof Teacher && (
              <div className="method-result teacher-method">
                {selectedPerson.obj.teach()}
              </div>
            )}
          </div>
        </div>
      )}
      {!selectedPerson && (
        <div className="placeholder">
          <p>Click on any person above to see inheritance and method overriding in action!</p>
        </div>
      )}
    </div>
  );
}