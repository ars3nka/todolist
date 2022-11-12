function createElement(tag, options = {}) {
  const element = document.createElement(tag);
  options.className && (element.className = options.className);
  options.textContent && (element.textContent = options.textContent);
  options.innerText && (element.innerText = options.innerText);
  options.placeholder && (element.placeholder = options.placeholder);
  return element;
}

export default createElement;