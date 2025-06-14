function changeColor(){
    const colors = ['pink', 'skyblue', 'yellow', 'blue', 'red'];
    const random = Math.floor(Math.random() * colors.length);
    document.getElementById('text').style.color = colors[random];
}