export const scrollToElement = (id) => {
  if (window) {
    var element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  }
};
