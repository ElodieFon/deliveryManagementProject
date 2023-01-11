import { Functionality } from './Functionality';
export class Project {
   
    constructor(
    public id : number ,
    public name : string ,
    public describe?: string ,
    public date? : Date,
    public functionalities? : Functionality[]
    ){
        
    }
  
}