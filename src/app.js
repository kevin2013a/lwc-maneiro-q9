import { LightningElement, wire } from 'lwc';
import  getListTask  from '@salesforce/apex/TaskControllerLWC.getListTask';

export default class ListTaskLWC extends LightningElement {
    tasks;
    error;
 
     columns =[
         {label: 'Assunto', fieldName: 'Subject'},
         {label: 'Status', fieldName: 'Status'},
         {label: 'Prioridade', fieldName: 'Priority'},
         {label: 'Data da Tarefa', fieldName: 'ActivityDate'},
         {label: 'ID Relacionado', fieldName: 'WhoId'}
     ]
 
     @wire(getListTask)wiredTasks({error, data}){
         if(data){
             this.tasks = data;
             this.error = undefined;
             console.log(this.tasks);
         } else if(error){
             this.error = error;
             this.tasks = undefined;
         }
     }
}