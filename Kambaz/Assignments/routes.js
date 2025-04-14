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

  app.delete("/api/assignments/:id", (req, res) => {
    const success = dao.deleteAssignment(req.params.id);
    if (success) res.sendStatus(200);
    else res.sendStatus(404);
  });
}
