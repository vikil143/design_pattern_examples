# design_pattern_examples

# 1). Problems of this code which can solve by SOLID Principles

1. Refernce used **Employees Class** which was wrong
2. **Employeees Class** used to modified has has Behaviour
3. Passing reference of **Employees Class** to Hr Employee
4. **Doing Task** is Declared in a wrong way fo Employee Class

- Solutions of above point

1. Solved class creating multiple places of Employees(Note it's Employees not Employee).
2. Leave it for now solutions
3. For Hr removed reference of employees from Hr class
4. Make it has override function of **Doing Task** by using **abstract class**

- Problem Short
  Point to be noted it is good practice for making all user class in Separate file create way to create this

- Solution of above point
  **Created separate function** for creating instance of Creating User named them **Staff**(has **class name** later on they must divided into Jr Employee, Senior Employee, Hr Department, etc)

- **Replace** Abstruct Class and function with **interface** in Employee Class

Solution for this method
Add interface like below code it will need to be **implement in their sub-class** If they not implement they will **take it** from **base class**

```ts
interface IDoTask {
  doingTask(): void;
}
```

Next step is to create task management life-cycle.

# 2). Working thing of organzation manager

1. Create task db where all tasks can added
2. Adding is done by CEO, Hr tream
3. Following variables can be required in Task

- variables are ID, name, creation date, time to complete, assigned to, assigned by, actual time taken by assignee, and status.
