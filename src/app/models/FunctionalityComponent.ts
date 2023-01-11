
export class FunctionalityComponent{
    constructor(      
        public id : number ,
        public name : string ,
        public fk_functionality : number ,
        public describe?: string ,
        public version ?: number,
        public dateStart? : Date,
        public date? : Date,
        public dateEnd?: Date        
    ){} 
}