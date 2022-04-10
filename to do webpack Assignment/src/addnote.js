
// function defined in the event listener addnotes to be created.
// e.key== key press choosen as Enter.

function addnotes(e){

    if(e.key === "Enter"){

        // on key press of "Enter" a div will be created which will contain the note typed in the inputbox.
        let note= document.createElement("div");
        note.id="note"

        // giving the textcontent of the div for the input value as passed in the inputbox
        note.textContent= document.getElementById("inputbox").value;

        // appending the note to the main div with id root to show in DOM.
        document.getElementById("root").append(note);

        // erase the note from the inputbox after it has been appended to html document.
        document.getElementById("inputbox").value="";

    }
}

// exporting the addnotes function to the index.js file.
module.exports = addnotes;