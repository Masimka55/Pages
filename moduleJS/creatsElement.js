export function createElement(tag, className, city) {
       let element = document.createElement(tag);
       element.classList.add(className);
       element.textContent = city;
       return element;
}