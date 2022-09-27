"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class DataModule {
    constructor() {
        // this.playersList = {} as Player[];
        this.playersList = [];
    }
    playersGeneratoer(year, team) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield $.get(`/${team}/${year}`);
            this.playersList = response.map((value) => {
                let player = new Player(value.firstName, value.lastName, `https://nba-players.herokuapp.com/players/${value.lastName}/${value.firstName}`, value.pos, value.jersey);
                return player;
            });
        });
    }
}
// const test1 : DataModule = new DataModule()
// test1.playersGeneratoer().then(() =>{
//     console.log(test1.playersList)
// })
//# sourceMappingURL=data-module.js.map