/**
 * @typedef {{
 *  (...args: any[]): Hole;
 *  for: (entry: IEntry, id?: string) => (...args: any[]) => any
 * }} IRenderer
 */
/**
 * @type {IRenderer}
 */
export function html(...args: any[]): Hole;
export namespace html { }
/**
 * @type {IRenderer}
 */
export function svg(...args: any[]): Hole;
export namespace svg { }
export function neverland<Args>(fn: (...args: Args[]) => unknown): (...args: Args[]) => Hook;
export function render(where: Node, what: any): Node;
export type IRenderer = {
    (...args: any[]): Hole;
    for: (entry: IEntry, id?: string) => (...args: any[]) => any;
};
export type ITagFunction = <K>(template: TemplateStringsArray, ...values: any[]) => K;
/**
 * An interface describing hooks counter
 */
export type ICounter = {
    a: number;
    aLength: number;
    i: number;
    iLength: number;
};
/**
 * An interface describing hooks info
 */
export type IInfo = {
    sub?: IInfo[];
    stack: IEntry[];
};
export type IEntry = {
    hook: any;
    fn: any;
};
export type CacheFn = <T>(wm: any, key: any, value: T) => T;
import { Hole } from "lighterhtml";
/**
 * @class
 * @param {Function} fn
 * @param {any[]} args
 */
declare function Hook(fn: Function, args: any[]): void;
declare class Hook {
    /**
     * @class
     * @param {Function} fn
     * @param {any[]} args
     */
    constructor(fn: Function, args: any[]);
    fn: Function;
    args: any[];
}
export { useState, useEffect, useContext, createContext, useRef, useReducer, useCallback, useMemo, useLayoutEffect } from "dom-augmentor";
