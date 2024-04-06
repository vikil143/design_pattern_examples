import { log } from "../utilities/helper";
import { SinglyLinkedList } from "./linked-list/index";

function main() {
  var list = new SinglyLinkedList();
  list.push("Hell");
  list.push("HRW");
  list.push("?");
  log(list.head.next);
}

export default main;
