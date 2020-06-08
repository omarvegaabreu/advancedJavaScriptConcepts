/**MY ANSWER
 *
 */
function startView() {
  const view = "view";
  return function setView() {
    console.log(`${view} has been set`);
  };
}

const startOnce = startView();

console.log(startView());
console.log(startView());
console.log(startView());
console.log(startView());

/**HIS ANSWER */
let view;
function initialize() {
  let called = 0;
  return function () {
    if (called > 0) {
      return;
    } else {
      view = "🏔";
      called = true;
      console.log("view has been set!");
    }
  };
}

const start = initialize();
start();
start();
start();
console.log(view);
