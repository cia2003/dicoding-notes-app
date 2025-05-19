export async function setAnimation(root) {
  const { animate, hover } = require("motion");
  const noteElement = root.querySelector(".note-item");

  const gestureState = new WeakMap();

  const transition = { type: "spring", stiffness: 500, damping: 25 };

  const initialState = {
    isHovered: false,
  };

  function setGesture(element, update) {
    const state = gestureState.get(element) || { ...initialState };
    const newState = { ...state, ...update };
    gestureState.set(element, newState);

    let scale = 1;
    if (newState.isHovered) {
      scale = 1.05;
      noteElement.classList.add("background-shadow");
    } else {
      noteElement.classList.remove("background-shadow");
    }

    animate(element, { scale }, transition);
  }

  hover(noteElement, (element) => {
    setGesture(element, { isHovered: true });
    return () => setGesture(element, { isHovered: false });
  });
}
