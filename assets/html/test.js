function shapeChange() {
    const COLOR_RED = 'rgb(255, 0, 0)';
    const COLOR_GREEN = 'rgb(0, 255, 0)';

    let shape = document.querySelector("#shape");
    let compStyles = window.getComputedStyle(shape);
    let boundingClientRect = shape.getBoundingClientRect();

    console.log('shape :', shape); // элемент
    console.log('compStyles', compStyles); // выводим все стили элемента
    console.log('boundingClientRect :', boundingClientRect); // размеры и положение элемента

    setInterval(animation, 1500); // задаем интервал анимации    
    function animation() {
        let backgroundColor = compStyles.getPropertyValue('background-color');

        if (backgroundColor == COLOR_RED) {
            shape.style.backgroundColor = COLOR_GREEN;
            shape.style.height = '100px';
            shape.style.width = '100px';
            shape.style.borderRadius = '20%';
        } else if (backgroundColor == COLOR_GREEN) {
            shape.style.backgroundColor = COLOR_RED;
            shape.style.height = '150px';
            shape.style.width = '150px';
            shape.style.borderRadius = '100%';
        } else {
            shape.style.backgroundColor = COLOR_GREEN;
        }
    }
}
shapeChange();