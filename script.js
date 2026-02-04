function getFormvalue(event) {
    event.preventDefault();

    var fname = document.forms[0]["fname"].value.trim();
    var lname = document.forms[0]["lname"].value.trim();

    alert(fname + " " + lname);
}
