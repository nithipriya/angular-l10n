import { Renderer } from 'angular2/core';
import { ElementRef } from 'angular2/core';
export declare class MdToolbar {
    private elementRef;
    private renderer;
    private _color;
    constructor(elementRef: ElementRef, renderer: Renderer);
    color: string;
    _updateColor(newColor: string): void;
    _setElementColor(color: string, isAdd: boolean): void;
}