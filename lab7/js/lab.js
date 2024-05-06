/* */
function sortUsername() {
    var userName = window.prompt("Please enter your name and I'll fix it.")
    console.log("Username: ", userName)

    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);

    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);

    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);

    return nameSorted;
}

document.writeln("I fixed your wack name: ",
sortUsername(), "</br>");