const FAIL_NEUTRAL = require("./fail.neutral.js");

function FLOW(input) {
  try {
    // dein Flow
  } catch (error) {
    return FAIL_NEUTRAL(error);
  }
}
