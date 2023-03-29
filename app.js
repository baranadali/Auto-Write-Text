const awText = "An automated post is being written here and it's very exciting to print it.";
    let index = 0;
    let timer = 150; //Time of writing..


    function writeText() {
        document.body.innerText = awText.slice(0, index);
        index++;
        
        if (index > awText.length -1) {
            index = 0;
        }
    };
    setInterval(writeText, timer);