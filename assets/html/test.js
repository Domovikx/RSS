function shapeChange() {

    let shape = document.querySelector("#shape");
    let compStyles = window.getComputedStyle(shape);
    let boundingClientRect = shape.getBoundingClientRect();

    console.log('shape :', shape); // элемент
    console.log('compStyles', compStyles); // выводим все стили элемента
    console.log('boundingClientRect :', boundingClientRect); // размеры и положение элемента

    setInterval(animation, 1500); // задаем интервал анимации    
    function animation() {
        const colorRed = 'rgb(255, 0, 0)';
        const colorGreen = 'rgb(0, 255, 0)';

        let color = compStyles.getPropertyValue('background-color');

        if (color == colorRed) {
            shape.style.backgroundColor = colorGreen;
            shape.style.height = '100px';
            shape.style.width = '100px';
            shape.style.borderRadius = '20%';
        } else if (color == colorGreen) {
            shape.style.backgroundColor = colorRed;
            shape.style.height = '150px';
            shape.style.width = '150px';
            shape.style.borderRadius = '100%';
        } else {
            shape.style.backgroundColor = colorGreen;
        }
    }
}
shapeChange();