var changeOptions = (optionsTarget, optionsOperation, desiredNumber) => ({

  type: 'CHANGE_OPTION',
  optionsTarget: optionsTarget,
  optionsOperation: optionsOperation,
  desiredNumber: desiredNumber,
  // total: total,

});

export default changeOptions;
