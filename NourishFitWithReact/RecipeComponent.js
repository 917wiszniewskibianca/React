class Recipe {
  constructor(id, title, information, instructions) {
    this.id = id;
    this.title = title;
    this.caloric_information = information;
    this.instructions = instructions;
  }

  updateTitle(newTitle) {
    this.title = newTitle;
  }

  updateInformation(newInformation) {
    this.caloric_information = newInformation;
  }

  updateInstructions(newInstructions) {
    this.instructions = newInstructions;
  }
}

export default Recipe;
