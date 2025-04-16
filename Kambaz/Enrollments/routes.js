import * as dao from "./dao.js";

export default function EnrollmentRoutes(app) {
  app.post("/api/enrollments", (req, res) => {
    const { userId, courseId } = req.body;
    const enrollment = dao.enrollUserInCourse(userId, courseId);
    if (!enrollment) {
      res.status(400).send({ error: "Already enrolled" });
      return;
    }
    res.json(enrollment);
  });

  app.delete("/api/enrollments", (req, res) => {
    const { userId, courseId } = req.body;
    const result = dao.unenrollUserFromCourse(userId, courseId);
    if (!result) {
      res.status(404).send({ error: "Enrollment not found" });
      return;
    }
    res.sendStatus(200);
  });

  app.get("/api/enrollments", (req, res) => {
    res.json(dao.findAllEnrollments());
  });
}
