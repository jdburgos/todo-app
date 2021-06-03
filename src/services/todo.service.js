/** Config **/
import firebase from "../config/firebase";

const db = firebase.ref("/todos");

class TodoDataService {
  getAll() {
    return db;
  }

  create(todo) {
    return db.push(todo);
  }

  update(id, value) {
    return db.child(id).update(value);
  }

  delete(id) {
    return db.child(id).remove();
  }

  deleteAll() {
    return db.remove();
  }
}

export default new TodoDataService();