module.exports = function (RED) {
  function StartNode(config) {
    RED.nodes.createNode(this, config);

    this.theme = RED.nodes.getNode(config.theme);

    const interval = setInterval(() => {
      console.log(`\n[${config.type}] msg`, { store: { ready: true } }, '\n');
      this.send({ store: { ready: true } });

      const timeout = setTimeout(() => {
        clearInterval(interval);
        clearTimeout(timeout);
      }, 1000 * 60);
    }, 1000 * 5);
  }

  RED.nodes.registerType('start', StartNode);
};
