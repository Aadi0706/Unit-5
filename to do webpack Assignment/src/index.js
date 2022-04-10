
import addnotes from './addnote.js'
import "./index.css"
import logo from '../images/logo.png';

// Creating the logo variable 
const mylogo= new Image(); // new Image()--> document.createElement("img");
mylogo.src = logo;
mylogo.id="logo"

// Giving the title My Notes.
const title=document.createElement('h1');
title.textContent="My Notes";
title.id="title";

// Creating the input box for to do list.
const inputbox=document.createElement('input');
inputbox.type="text";
inputbox.id="inputbox";
inputbox.placeholder="Enter your notes";

// append the title, input box to the main div with id root.
document.getElementById("root").append(mylogo,title,inputbox);


// creating the event listeners for input box by the keypress and invoking a certain function.
document.getElementById("inputbox").addEventListener("keypress",addnotes);
