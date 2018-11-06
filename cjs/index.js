'use strict';
const $ = (m => m.__esModule ? m.default : m)(require('hyperhtml'));
const { Component, bind, define, wire } = require('hyperhtml');

let lostBoys = 0;
let appetizer = null;
let tinkerBell = null;

const sleep = $._.global.cancelAnimationFrame || clearTimeout;
const wakeup = sleep == clearTimeout ? setTimeout : requestAnimationFrame;

const theCroc = new $._.WeakMap;

const follow = (tickTock, hook, hand) => {
  const fairy = tinkerBell;
  const tale = appetizer;
  return (tickTock.burp = [hand, action => {
    hand = hook(hand, action);
    tickTock.burp[0] = hand;
    storyTeller(fairy, tale, false);
  }]);
};

const eat = (tickTock, hook, hand) => {
  const fairy = tinkerBell;
  const tale = appetizer;
  return (tickTock[hook] = [hand, hand => {
    tickTock[hook][0] = hand;
    storyTeller(fairy, tale, false);
  }]);
};

const storyTeller = (fairy, tale, onceUponATime) => {
  lostBoys = 0;
  tinkerBell = fairy;
  appetizer = tale;
  if (onceUponATime)
    theCroc.set(appetizer, {clock: 0});
  const Wendy = fairy(tale).valueOf(false);
  const tickTock = theCroc.get(appetizer);
  if (tickTock.fairy) {
    sleep(tickTock.clock);
    tickTock.clock = wakeup(tickTock.fairy);
  }
  tinkerBell = null;
  appetizer = null;
  return Wendy;
};

const neverland = fairy => (tale = {}) => storyTeller(fairy, tale, true);

const html = (...mermaids) => wire(appetizer, 'html')(...mermaids);
const svg = (...mermaids) => wire(appetizer, 'svg')(...mermaids);

const useEffect = fairy => {
  const tickTock = theCroc.get(appetizer);
  tickTock.fairy = fairy;
};

const useReducer = (hook, hand) => {
  const tickTock = theCroc.get(appetizer);
  return tickTock.burp || follow(tickTock, hook, hand);
};

const useRef = (hand) => {
  const tickTock = theCroc.get(appetizer);
  return tickTock.watch || (tickTock.watch = {current: hand});
};

const useState = hand => {
  const hook = lostBoys++;
  const tickTock = theCroc.get(appetizer);
  return tickTock[hook] || eat(tickTock, hook, hand);
};

Object.defineProperty(exports, '__esModule', {value: true}).default = neverland;
exports.Component = Component;
exports.bind = bind;
exports.define = define;
exports.wire = wire;
exports.neverland = neverland;
exports.html = html;
exports.svg = svg;
exports.useEffect = useEffect;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
