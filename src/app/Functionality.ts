import { Component } from './Component';

export class Functionality {

    constructor(
        public functionality : {
            id : number ,
            name : string ,
            describ: string ,
            version : number,
            dateStart : Date,
            date : Date,
            dateEnd?: Date ,
        }
      
    ){}
}