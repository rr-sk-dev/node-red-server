module.exports = function (RED) {
  function ThemeConfigNode(node) {
    RED.nodes.createNode(this, node);

    this.bgColor = node.bgColor;
    this.textColor = node.textColor;
    this.btnColor = node.btnColor;
  }
  RED.nodes.registerType('theme', ThemeConfigNode);
};
