
function capitalizeFirstLetters(str) {
    if (str.length <= 0) {
      return "";
    } else {
      return str
        .toLowerCase()
        .split(" ")
        .map((x) => x[0].toUpperCase() + x.slice(1))
        .join(" ");
    }
  }

  module.exports = capitalizeFirstLetters;