import { log } from "../utilities/helper";
import { SinglyLinkedList } from "./linked-list/index";

function main() {
  var list = new SinglyLinkedList();
  log(list.push("Hell"));
  log(list.push("HRW"));
  log(list.pop());
  log(list);
}

export default main;
