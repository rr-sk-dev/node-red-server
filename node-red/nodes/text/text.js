module.exports = function (RED) {
  function TextNode(config) {
    RED.nodes.createNode(this, config);

    this.on('input', (msg, send, done) => {
      console.log(`\n[${config.type}] msg`, msg, '\n');
      send(msg);
      done();
    });
  }

  RED.nodes.registerType('text', TextNode);
};
