const TEAM_MATRIX = {
  achse: "ridvan",
  rollen: {
    technik: { aufgabe: "Rechner, CPU, RAM, GPU" },
    web: { aufgabe: "Homepage, UI, Team-Seite" },
    connect: { aufgabe: "Menschen finden, Gespräche" },
    raum: { aufgabe: "Ort, Internet-Café, Setup" }
  },
  verbindung: {
    technik: ["web", "raum"],
    web: ["connect"],
    connect: ["raum"],
    raum: ["achse"]
  }
};

module.exports = TEAM_MATRIX;

