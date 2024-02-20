const { buildMessageObject } = require('../utils/msg.utils');

module.exports = function (RED) {
  function StartNode(config) {
    RED.nodes.createNode(this, config);

    this.theme = RED.nodes.getNode(config.theme);
  }

  RED.nodes.registerType('start', StartNode);
};
