import { Functionality } from './Functionality';
export class Project {

    constructor(
        public id : number ,
        public name : string ,
        public describ: string ,
        public functionalities? : Functionality[]
    ){

    }
  
}