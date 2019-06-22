function shapeChange() {
    const COLOR_RED = 'rgb(255, 0, 0)';
    const COLOR_GREEN = 'rgb(0, 255, 0)';

    const shape = document.getElementById('shape');
    const computedStyle = window.getComputedStyle(shape);

    let count = 0;

    console.log('shape :', shape); // элемент
    console.log('computedStyle', computedStyle); // выводим все стили элемента

    function animation() {
        const backgroundColor = computedStyle.getPropertyValue('background-color');

        if (backgroundColor === COLOR_RED) {
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

    function increaseCount() {
        count++;
        document.getElementById("count").innerHTML = count;
    }

    setInterval(() => {
        animation();
        increaseCount();
    }, 1500); // задаем интервал анимации 

}
shapeChange();