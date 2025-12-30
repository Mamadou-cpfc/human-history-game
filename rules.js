export function isChoiceAvailable(choice, state) {
  if (!choice.requires) return true;

  const r = choice.requires;

  if (r.maxA !== undefined && state.A > r.maxA) return false;
  if (r.maxB !== undefined && state.B > r.maxB) return false;
  if (r.maxD !== undefined && state.D > r.maxD) return false;

  if (r.maxSpeed !== undefined && state.bias_speed > r.maxSpeed) return false;
  if (r.maxProcedure !== undefined && state.bias_procedure > r.maxProcedure) return false;
  if (r.maxNarrative !== undefined && state.bias_narrative > r.maxNarrative) return false;
  if (r.maxAvoidance !== undefined && state.bias_avoidance > r.maxAvoidance) return false;

  if (r.maxTime !== undefined && state.timePressure > r.maxTime) return false;

  return true;
}