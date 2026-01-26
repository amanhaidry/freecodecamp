/* Build a Project Idea Board
Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should define an object constant named projectStatus with the three keys: PENDING, SUCCESS, and FAILURE. Each status should be assigned an object with a description key with the value Pending Execution, Executed Successfully, and Execution Failed, respectively.
You should define a class named ProjectIdea with a constructor that takes title and description as parameters. Initialize the title and description properties with the provided parameters. The class should also have a property named status that is set to the value projectStatus.PENDING by default.
You should define a method named updateProjectStatus inside the ProjectIdea class. This method should accept a newStatus parameter and update the status property to the given value.
You should define a ProjectIdeaBoard class with a constructor that accepts a title and initializes an empty array named ideas to hold instances of the ProjectIdea class.
You should define a method named pin inside the ProjectIdeaBoard class that accepts an instance of the ProjectIdea class and pushes the given instance to the ideas array.
You should define a method named unpin inside the ProjectIdeaBoard class. This method should accept an instance of the ProjectIdea class and removes it from the ideas array.
You should define a method named count that returns the number of project ideas in the given ProjectIdeaBoard array.
You should define a method named formatToString that returns the name of the projects ideas, their description and status in the format:
<ProjectIdeaBoard title> has <ProjectIdeaBoard count> idea(s)
<ProjectIdea title> (<ProjectIdea status description>) - <ProjectIdea description>
<ProjectIdea title> (<ProjectIdea status description>) - <ProjectIdea description>
.
.
.
*/

// projectStatus constant
const projectStatus = {
  PENDING: { description: "Pending Execution" },
  SUCCESS: { description: "Executed Successfully" },
  FAILURE: { description: "Execution Failed" },
};

// ProjectIdea class
class ProjectIdea {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.status = projectStatus.PENDING; // default status
  }

  // Method to update project status
  updateProjectStatus(newStatus) {
    this.status = newStatus;
  }
}

// ProjectIdeaBoard class
class ProjectIdeaBoard {
  constructor(title) {
    this.title = title;
    this.ideas = [];
  }

  // Pin method
  pin(projectIdea) {
    this.ideas.push(projectIdea);
  }

  // Unpin method
  unpin(projectIdea) {
    this.ideas = this.ideas.filter((idea) => idea !== projectIdea);
  }

  // Count method
  count() {
    return this.ideas.length;
  }

  // FormatToString method
  formatToString() {
    let result = `${this.title} has ${this.count()} idea(s)\n`;
    this.ideas.forEach((idea) => {
      result += `${idea.title} (${idea.status.description}) - ${idea.description}\n`;
    });
    return result;
  }
}

// Tests

// Empty board test
const emptyBoard = new ProjectIdeaBoard("Empty Board");
console.log(emptyBoard.formatToString());
// Output: "Empty Board has 0 idea(s)\n"

// Tech Projects test
const techProjects = new ProjectIdeaBoard("Tech Projects Board");
const smartHome = new ProjectIdea(
  "Smart Home System",
  "An integrated system to control lighting, temperature, and security devices remotely.",
);
techProjects.pin(smartHome);
console.log(techProjects.formatToString());
// Output:
// "Tech Projects Board has 1 idea(s)\n
// Smart Home System (Pending Execution) - An integrated system to control lighting, temperature, and security devices remotely.\n"
