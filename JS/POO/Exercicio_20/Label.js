import { Componet } from "./Coponent.js";
export class Label extends Componet{
    constructor(text, parent, options){
        super('label', parent, Object.assign({}, options, { textContent: text }))
    }
}