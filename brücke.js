// brücke.js

const FAIL_NEUTRAL = require("./fail.neutral.js");

// QI = Erkenntnis (Rolle, Ort, Home)
function QI(rolle, ort, home) {
    return rolle + ort + home;
}

// IQQ = Weis (Suite, Bildung)
function IQQ(suite, bildung) {
    return suite + bildung;
}

// Continuum = Zugang durch Qualität
function continuumZugang(qi, iqq) {
    try {
        const summe = qi + iqq;

        if (summe > 0) {
            return "Continuum geöffnet";
        } else {
            return "Continuum geschlossen";
        }
    } catch (error) {
        return FAIL_NEUTRAL(error);
    }
}

module.exports = {
    QI,
    IQQ,
    continuumZugang
};
