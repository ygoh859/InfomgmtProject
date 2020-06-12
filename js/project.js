
// Task #2: Buttons that display more info + search bar
const PROGRAMS = [
  {
    id: "program-1",
    program_title: "Semester Exchange",
    program_description: "A longer exchange to give you the chance to fully experience traditions with your host family and establish deeper friendships abroad.",
    image: "images/semester.jpg",
    image_title: "Semester Exchange",
  },
  {
    id: "program-2",
    program_title: "Summer Programs",
    program_description: "A great opportunity for insight into life in a different country while having fun and not missing any school.",
    image: "images/summer.jpg",
    image_title: "Summer Programs",
  },
  {
    id: "program-3",
    program_title: "Volunteer",
    program_description: "Contribute to the local community as you stay abroad and broaden your perspectives of the world as you interact with the community.",
    image: "images/volunteer.jpg",
    image_title: "Volunteer",
  },
  {
    id: "program-4",
    program_title: "Language Immersion",
    program_description: "This program helps you to build on your language skills as you immerse yourself in their history and interact with locals.",
    image: "images/language.jpg",
    image_title: "Language Immersion",
  },
  {
    id: "program-5",
    program_title: "Arts & Culture Exchange",
    program_description: "This program exchanges students who focus on performing or fine arts to share their culture and talents to deepen their knowledge of different kinds of arts.",
    image: "images/arts.jpg",
    image_title: "Arts & Culture",
  },
];

function createProgramHTML(program) {
  let programHTML = $("<article class='programArticle'>");

  let figure = $("<figure>");
  let image = $("<img>", {src: program.image, alt: program.image_title});
  figure.append(image);
  programHTML.append(figure);

  let title = $("<h2>" + program.program_title + "<h2>");
  programHTML.append(title);
  let description = $("<p id='readMore" + program.id + "'>" + program.program_description + "</p>").hide();
  programHTML.append(description);
  let button = $("<button class='moreButton' id='morebtn" + program.id + "'>Learn More</button>");
  programHTML.append(button);

  return programHTML;
}

function displayPrograms(programs) {
  let programsList = $("#programsList");
  programsList.empty();
  for(let program of programs) {
    let programHTML = createProgramHTML(program);
    programsList.append(programHTML);
  }
}

$(document).ready(function() {
  let mainPrograms = [PROGRAMS[0], PROGRAMS[1], PROGRAMS[2]];
  displayPrograms(mainPrograms);

  $("#searchText").on("keyup", search);
  $(".moreButton").on("click", readMoreButton);

  let mainStudents = [STUDENTS[0], STUDENTS[1]];
  displayStudents(mainStudents);

  $("a").on("click", smoothScroll);
});

function search() {
  let query = $("#searchText").val();
  query = query.toLowerCase().trim();
  let matches = [];
  for(let program of PROGRAMS) {
    let programTitle = program.program_title.toLowerCase();
    if(programTitle.includes(query)) {
      matches.push(program);
    }
  }
  displayPrograms(matches);
  $(".moreButton").on("click", readMoreButton);
}

function readMoreButton() {
  let $this = $(this);
  let buttonID = $this.attr("id");
  let readMoreIDNo = buttonID.slice(7,);
  $("#readMore" + readMoreIDNo).toggle();
  if ($this.text() == "Learn More") {
    $this.text("Show Less");
  } else {
    $this.text("Learn More");
  }
}


// Additional features below (Navigation bar scrolling + Stories section)

function smoothScroll(event) {
    let link = this.hash;
    $("html, body").animate({ scrollTop: $(link).offset().top }, 850);
  }

const STUDENTS = [
  {
    id: "student-1",
    student_title: "Sam went to Japan.",
    student_quote: "\"I believe this exchange has made me more adaptable, understanding, and confident, and overall a well-rounded individual.\"",
    image: "images/student1.jpg",
    image_title: "Student in Japan",
  },
  {
    id: "student-2",
    student_title: "Anna went to Italy.",
    student_quote: "\"This exchange has made me realise how massive the world is, and how much there is still to see. It has taught me to take every opportunity I can and not be afraid to talk to different kinds of people to learn from them.\"",
    image: "images/student2.jpg",
    image_title: "Student in Italy",
  },
];

function createStudentHTML(student) {
  let studentHTML = $("<article class='studentArticle'>");
  let figure = $("<figure>");
  let image = $("<img>", {src: student.image, alt: student.image_title});
  figure.append(image);
  studentHTML.append(figure);
  let quote = $("<p>" + student.student_quote + "</p>");
  studentHTML.append(quote);
  let title = $("<h2>" + student.student_title + "<h2>");
  studentHTML.append(title);
  return studentHTML;
}

function displayStudents(students) {
  let studentsList = $("#studentsList");
  studentsList.empty();
  for(let student of students) {
    let studentHTML = createStudentHTML(student);
    studentsList.append(studentHTML);
  }
}
