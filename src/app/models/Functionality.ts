import { ComponentFunctionality } from './ComponentFunctionality';

export class Functionality {

    constructor(  
        public id : number ,
        public name : string ,
        public describ : string ,
        public version : number,
        public dateStart? : Date,
        public date? : Date,
        public dateEnd? : Date ,   
        public components? : ComponentFunctionality[]
    ){}
}