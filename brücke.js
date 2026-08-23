const FAIL_NEUTRAL = require("./fail.neutral.js");

function BRUECKE(signal) {
  if (!signal) {
    return FAIL_NEUTRAL("Signal fehlt");
  }
  return signal;
}
