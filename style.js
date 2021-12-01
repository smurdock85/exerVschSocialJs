
var ExchangeStudent = {
    name: "David Knee",
    age: 19,
    country: "Germany",
    courses: [
      {
        courseName: "English",
        courseCode: "ENG101",
        assignments: [
          {
            title: "Lorem Ipsum",
            assignedDate: "29 November 2021",
            dueDate: "30 November 2021",
            grade: 100,
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus."
          }
        ]
      },
      {
        courseName: "Biology",
        courseCode: "BIO101",
        assignments: [
          {
            title: "Lorem Ipsum",
            assignedDate: "29 November 2021",
            dueDate: "01 December 2021",
            grade: 90,
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus."
          }
        ]
      },
      {
        courseName: "English",
        courseCode: "ENG101",
        assignments: [
          {
            title: "Lorem Ipsum",
            assignedDate: "29 November 2021",
            dueDate: "02 December 2021",
            grade: 80,
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus."
          }
        ]
      }
    ],
    getStudentBio: function () {
      var toReturn =  "I am " + this.name + ".\nI am " + this.age + " years old.\nI am from " + this.country + ".\nI am currently studying ";
      for (var i = 0; i < courses.length; i++){
        toReturn = toReturn + this.courses[i].courseName
      }
      return toReturn
    }
}