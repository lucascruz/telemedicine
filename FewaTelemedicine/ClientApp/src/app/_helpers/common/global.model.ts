
import { ChatModel,MessageModel } from '../models/chat.model';
import { Patient, Provider, Practice } from '../models/domain-model';

export class Global {
    providerObj: Provider = null;
    patientObj: Patient = null;
    practiceObj: Practice = null;
    isProvider: boolean = false;
    isPatient: boolean = false;
    apiUrl: string = "/api/";
    practiceUrl: string = "/Practice/";
    config: any = null;
    token: string="";
    currentPractice: string = "";
    currentProvider: string = "";
    chatData: Array<ChatModel> = new Array<ChatModel>();
    previousChats: Array<MessageModel> = [];
    isMobile = /iPhone|webOS|mobile|CriOS|iPad|iPod|BlackBerry|IEMobile|'Android' + 'Chrome'|Opera Mini|Android/i;
    constructor() {
        this.providerObj = new Provider();
        this.patientObj = new Patient();
        this.practiceObj = new Practice();
        this.practiceObj.logoPath = '/assets/img/logo.png';
    }
}