import * as dao from "./dao.js";

export default function AssignmentRoutes(app) {
  app.post("/api/assignments", (req, res) => {
    const newAssignment = dao.createAssignment(req.body);
    res.json(newAssignment);
  });

  app.get("/api/assignments", (req, res) => {
    res.json(dao.findAllAssignments());
  });

  app.get("/api/assignments/:id", (req, res) => {
    const assignment = dao.findAssignmentById(req.params.id);
    if (assignment) res.json(assignment);
    else res.sendStatus(404);
  });

  app.put("/api/assignments/:id", (req, res) => {
    const updated = dao.updateAssignment(req.params.id, req.body);
    if (updated) res.json(updated);
    else res.sendStatus(404);
  });

  app.delete("/api/assignments/:assignmentId", async (req, res) => {
    const { assignmentId } = req.params;
    const success = await dao.deleteAssignment(assignmentId);
    res.send(success);
  });
}
