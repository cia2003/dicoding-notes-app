class Utils {
  static emptyElement(element) {
    element.innerHTML = "";
  }

  static showElement(element, displayType = "block") {
    element.style.display = displayType;
    element.hidden = false;
  }

  static hideElement(element) {
    element.style.display = "none";
    element.hidden = true;
  }
}

export default Utils;
