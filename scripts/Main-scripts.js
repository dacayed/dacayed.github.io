
//copy text function
function cpyText(){
    //text to copy
    var copyText = document.getElementById("copy");
    
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.textContent);
    
    // Alert the copied text
    alert("Copied the text: " + copyText.textContent);
}