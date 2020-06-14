let array = []
function tweet() {
    posting = document.getElementById('createTweet').value;
    array.push(posting)
    for (i=0;i<array.length;i++){
        var element = document.createElement("p");
        var posted = document.createTextNode(array[i]);
    }
    element.appendChild(posted);
    document.getElementById("yourTweet").appendChild(element);
}
