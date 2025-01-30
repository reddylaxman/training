import { clgName, Tasking as tasking } from "./module1.js"; //Named exports
import data from "./module1.js";
const { marks, m1 } = data;
tasking();
console.log(marks, m1);
