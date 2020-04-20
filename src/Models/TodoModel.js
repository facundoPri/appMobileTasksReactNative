class TodoModel {
  constructor(todo, checked = false) {
    this.todo = todo;
    this.checked = checked;
    this.createAt = new Date();
  }
}

module.exports = TodoModel;
