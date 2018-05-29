var changeExOrder = (id, operation, desired) => ({
  type: 'CHANGE_EX_ORDER',
  id: id,
  operation: operation,
  desired: desired,
});

export default changeExOrder;
