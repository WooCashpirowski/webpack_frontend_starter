import Sample from "./sample";

import "./index.css";

const sample = new Sample();

async function main() {
  console.log(await sample.getSample());
}

main();
