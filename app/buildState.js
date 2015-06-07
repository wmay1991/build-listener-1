var BuildState = BuildState || {};

BuildState.determineStatus = function(inputParameter) {
  switch (inputParameter) {
    case 'pass':
    case 'warn':
    case 'fail':
      return inputParameter;
      break;
    default:
      return 'unknown';
  }
};

module.exports= BuildState;
