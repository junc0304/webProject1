import { observable, action, toJS } from 'mobx';
import RootStore from './RootStore';


export default class CardStore {

    @observable isLogin = false;

    constructor(RootStore) {
        this.rootStore = RootStore; 

    }

    getMarketCards = () => {
        //do something
    }

    getGroupCards = () => {
        //do something
    }
    
    getRentCards = () => {
        //do something
    }







}