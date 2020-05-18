/************
 *
 * Filename -  function.js
 *
 * Purpose -   js functions for Assignment 1 pages: home.html and about.html
 *
 * Copyright:  none
 *
 ************/
const initialMessages = '{"name":"messages","messages":[{"message":"Hi this is the first demo message","author":"TJ"},{"message":"Now try creating your own messages","author":"TJ"}]}';

function initMessages() {
  const listOfMessages = JSON.parse(initialMessages);
  // console.log(listOfMessages);
  for (let messageObj of listOfMessages.messages)
  {
    const message = messageObj.message;
    if (message === "")
    {
      alert("One of the initial messages is empty.")
    }
    else
    {
      const li = document.createElement("li");
      const child = document.createTextNode(message);
      li.appendChild(child);
      document.getElementById("messages").appendChild(li);
    }
  }
}

function addMessage() {
  const li = document.createElement("li");
  const input = document.getElementById("messageinput").value;
  const child = document.createTextNode(input);
  li.appendChild(child);
  if (input === "") {
    alert("Cannot add an empty message.");
  }
  else {
    document.getElementById("messages").appendChild(li);
  }
  document.getElementById("messageinput").value = "";
}

function clearMessages()
{
  const list = document.getElementById("messages");
  while (list.hasChildNodes())
  {
    list.removeChild(list.childNodes[0]);
  }
}

// TODO

/* Class Material */
/*
function setSize() {
  let size = 0;
  let randomNum = Math.floor(Math.random()*10);
  for (let i =0; i < randomNum; i++) {
  size += 10;
  }
  return size;
}
function moveVertical() {
  let catPicture = document.getElementById('picture');
  if (catPicture) {
    catPicture.style.top = setSize() + 'px';
  }
}
function moveHorizontal() {
  let catPicture = document.getElementById('picture');
  if (catPicture) {
    catPicture.style.left = setSize() + 'px';
  }
}
*/