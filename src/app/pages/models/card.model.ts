import { Column } from "./column.model";

export class Card {
 constructor(public name: string, public columns: Column[]) {

 }
}