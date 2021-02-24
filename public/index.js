(function() {
    // populate definitions
    window.onload = function() {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                var dictionary = JSON.parse(this.responseText);
                let defTags = document.querySelectorAll("def");
                for (let i = 0; i < defTags.length; i++) {
                    let word = defTags[i].className.split("-")[1];
                    let definition = dictionary[word];
                    defTags[i].children[0].innerHTML = `<b>${word}: </b> ${definition}`;
                    console.log(defTags[i].className.split("-")[1]);
                }
                // document.getElementById("demo").innerHTML = myObj.name;
            }
        };
        xmlhttp.open("GET", "dictionary.json", true);
        xmlhttp.send();
    }

})();