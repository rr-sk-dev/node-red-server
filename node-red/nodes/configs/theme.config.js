module.exports = function (RED) {
  function ThemeConfigNode(config) {
    RED.nodes.createNode(this, config);

    this.bgColor = config.bgColor;
    this.textColor = config.textColor;
    this.btnColor = config.btnColor;
  }
  RED.nodes.registerType('theme', ThemeConfigNode);
};
