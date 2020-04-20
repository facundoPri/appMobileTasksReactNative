class TodoModel {
  constructor(todo, checked = false) {
    this.todo = todo;
    this.checked = checked;
    this.createdAt = new Date();
  }
}

module.exports = TodoModel;
