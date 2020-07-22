import axios from "axios";
import { store } from "./index";
import { addMessageSuccess, clearMessageSuccess, getMessageSuccess } from "./actions/index";

const instance = axios.create({
  baseURL: "https://cpsc436i-assignment-backend.herokuapp.com/"
});

export function apiGetMessages() {
  console.log("get messages");
  instance.get("/messages").then(response => {
    console.log(response.data);
    store.dispatch(getMessageSuccess(response.data));
  }).catch(error => {
    console.log(error);
  });
}

export function apiAddMessage(content, date) {
  console.log("add message");
  if (content.length === 0) {
    alert("message content is empty");
  };

  let body = {
    content,
    date
  };

  instance.post("/message", body).then(response => {
    console.log(response.data);
    store.dispatch(addMessageSuccess(response.data));
  }).catch(error => {
    console.log(error);
  });
}

export function apiClearMessages() {
  console.log("clear messages");

  instance.delete("/messages").then(response => {
    console.log(response.data);
    store.dispatch(clearMessageSuccess());
  }).catch(error => {
    console.log(error);
  });
}
