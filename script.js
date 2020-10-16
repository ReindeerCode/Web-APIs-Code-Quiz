function locStore (){
    localStorage.setItem("phone", "555-0001")
    var numId = document.querySelectorAll("#num");

    return numId.append(localStorage.getItem("phone"))
}
locStore();