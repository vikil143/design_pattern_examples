import { log } from "../utilities/helper";
import { SinglyLinkedList } from "./linked-list/index";

function main() {
  var list = new SinglyLinkedList();
  log(list.push("Hell"));
  log("Hell added");
  log(list.push("HRW"));
  log("HRW added");
  log(list);
  log(list.push("!!!@"));
  log("!!!@ added");
  log(list);
  log(list.pop());
  log("Hell removed");
  log(list.pop());
  log("HRW removed");
  log(list);
}

export default main;
