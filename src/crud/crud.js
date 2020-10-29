import firebase from "../config/firebaseConfig";

export const addTodo = (todoDescription, user) => {
  const newTodo = {
    description: todoDescription,
    user,
    isCompleted: false,
    createdAt: new Date(),
  };
  firebase.firestore().collection("/todos").add(newTodo);
};

export const deleteTodo = (todoId) => {
  firebase.firestore().doc(`/todos/${todoId}`).delete();
};

export const updateTodo = (todoId, todoState) => {
  firebase
    .firestore()
    .doc(`/todos/${todoId}`)
    .update({ isCompleted: !todoState });
};
