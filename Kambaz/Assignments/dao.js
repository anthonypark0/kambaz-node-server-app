import Database from "../Database/index.js";
import model from "./model.js";
import { v4 as uuidv4 } from "uuid";
export function createAssignment(assignment) {
  const newAssignment = { ...assignment, _id: uuidv4() };
  return model.create(newAssignment);
 // Database.assignments.push(newAssignment);
 // return newAssignment;
}


export function findAssignmentsForCourse(courseId) {
    return model.find({ course: courseId });
}

export function findAllAssignments() {
  return Database.assignments;
}

export function findAssignmentById(id) {
  return Database.assignments.find(a => a._id === id);
}

export function updateAssignment(id, updatedAssignment) {
  const index = Database.assignments.findIndex(a => a._id === id);
  if (index !== -1) {
    Database.assignments[index] = { ...Database.assignments[index], ...updatedAssignment };
    return Database.assignments[index];
  }
  return null;
}

export function deleteAssignment(id) {
    return model.deleteOne({ _id: id });
    /*
  const index = Database.assignments.findIndex(a => a._id === id);
  if (index !== -1) {
    Database.assignments.splice(index, 1);
    return true;
  }
  return false;*/
}
