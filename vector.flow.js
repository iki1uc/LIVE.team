// vector.flow.js
// Potender VECTOR (steigend) & Abfall VECTOR (fallend)

const FAIL_NEUTRAL = require("./fail.neutral.js");

// QI = Reinheit des Tatbestands
function QI(rolle, ort, home) {
    return rolle + ort + home;
}

// IQQ = Reinheit des Vorgangs
function IQQ(suite, bildung) {
    return suite + bildung;
}

// ENGINE = Kraft, die VECTOR antreibt
function ENGINE(qi, iqq) {
    return qi * 0.6 + iqq * 0.4; 
}

// POTENDER VECTOR = steigende Bewegung
function potenderVector(qi, iqq) {
    try {
        const engine = ENGINE(qi, iqq);
        const richtung = engine + (qi - iqq);

        return {
            typ: "potender",
            engine,
            richtung,
            ausgang: engine + richtung
        };
    } catch (error) {
        return FAIL_NEUTRAL(error);
    }
}

// ABFALL VECTOR = fallende Bewegung
function abfallVector(qi, iqq) {
    try {
        const engine = ENGINE(qi, iqq);
        const richtung = engine - (qi + iqq);

        return {
            typ: "abfall",
            engine,
            richtung,
            ausgang: engine + richtung
        };
    } catch (error) {
        return FAIL_NEUTRAL(error);
    }
}

// Export
module.exports = {
    QI,
    IQQ,
    ENGINE,
    potenderVector,
    abfallVector
};
