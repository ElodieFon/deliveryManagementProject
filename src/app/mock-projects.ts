import { Project } from "./models/Project"

export const PROJETS: Project[] = [
    
       {
        id : 1 ,
        name : 'projet1',
        describ : 'Je suis le projet numéro 1 Hic voluptate magni deserunt, ex facilis consequuntur minus est quae enim modi perferendis? Quo fugit iste nostrum exercitationem at? Repudiandae, veniam tempora? Facilis, quis. Inventore, consequuntur dicta! Autem possimus vitae porro consequuntur eos neque nihil facilis dolor, sed mollitia numquam hic voluptate odit, illo maiores obcaecati, quae dolore quibusdam? Quaerat, commodi magnam!',
        functionalities : [
            {   
                id:1 ,
                name : 'functionalité1',
                describ : 'je suis la functionalité numéro 1',
                version : 1 ,
                components : [
                    {
                        id:1 ,
                        name : 'component1',
                        describ : 'je suis le component numero 1 de la functionalité 1',
                        version : 1 ,
                    },
                    {
                        id:2 ,
                        name : 'component2',
                        describ : 'je suis le component numero 2 de la functionalité 1',
                        version : 1 ,
                    }
                ]
            },
            {
                id:2 ,
                name : 'functionalité2',
                describ : 'je suis la functionalité numéro 2',
                version : 1 ,
                components : [
                    {
                        id:1 ,
                        name : 'component1',
                        describ : 'je suis le component numero 1 de la functionalité 2',
                        version : 1 ,
                    },
                    {
                        id:2 ,
                        name : 'component2',
                        describ : 'je suis le component numero 2 de la functionalité 2',
                        version : 1 ,
                    }
                ]
            }
        ]
       },
       {
        id : 2 ,
        name : 'projet2',
        describ : 'Je suis le projet numéro 2 sed mollitia numquam hic voluptate odit, illo maiores obcaecati, quae dolore quibusdam? Quaerat, commodi magnam!',
        functionalities : [
            {   
                id:1 ,
                name : 'functionalité1',
                describ : 'je suis la functionalité numéro 1',
                version : 1 ,
                components : [
                    {
                        id:1 ,
                        name : 'component1',
                        describ : 'je suis le component numero 1 de la functionalité 1',
                        version : 1 ,
                    },
                    {
                        id:2 ,
                        name : 'component2',
                        describ : 'je suis le component numero 2 de la functionalité 1',
                        version : 1 ,
                    }
                ]
            },
            {
                id:2 ,
                name : 'functionalité2',
                describ : 'je suis la functionalité numéro 2',
                version : 1 ,
                components : [
                    {
                        id:1 ,
                        name : 'component1',
                        describ : 'je suis le component numero 1 de la functionalité 2',
                        version : 1 ,
                    },
                    {
                        id:2 ,
                        name : 'component2',
                        describ : 'je suis le component numero 2 de la functionalité 2',
                        version : 1 ,
                    }
                ]
            }
        ]
       }
        
]