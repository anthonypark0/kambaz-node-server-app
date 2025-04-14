import Database from "../Database/index.js";

export function enrollUserInCourse(userId, courseId) {
  const alreadyEnrolled = Database.enrollments.find(
    (e) => e.user === userId && e.course === courseId
  );
  if (alreadyEnrolled) return null; // already enrolled

  const enrollment = {
    _id: new Date().getTime().toString(),
    user: userId,
    course: courseId,
  };
  Database.enrollments.push(enrollment);
  return enrollment;
}

export function unenrollUserFromCourse(userId, courseId) {
  const index = Database.enrollments.findIndex(
    (e) => e.user === userId && e.course === courseId
  );
  if (index !== -1) {
    const removed = Database.enrollments.splice(index, 1)[0];
    return removed;
  }
  return null;
}

export function findEnrollmentsForUser(userId) {
  return Database.enrollments.filter((e) => e.user === userId);
}

export function findAllEnrollments() {
  return Database.enrollments;
}
