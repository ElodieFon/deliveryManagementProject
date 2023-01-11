import { FunctionalityComponent } from './FunctionalityComponent';

export class Functionality {
    lenght: any;

    constructor(  
        public id : number ,
        public name : string ,      
        public fk_project : number,  
        public describe? : string ,  
        public version? : number,
        public dateStart? : Date,
        public date? : Date,
        public dateEnd? : Date ,   
        public components? :FunctionalityComponent[]
    ){}
}