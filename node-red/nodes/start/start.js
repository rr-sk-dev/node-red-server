module.exports = function (RED) {
  function StartNode(config) {
    RED.nodes.createNode(this, config);
  }
  RED.nodes.registerType('start', StartNode);
};
