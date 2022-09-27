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
let dataModule = new DataModule();
let renderer = new Renderer();
// $('.btn-default').on('click',function () {
//     const year = $('#year').val()
//     console.log(year)
// })
function controller() {
    return __awaiter(this, void 0, void 0, function* () {
        // const year = $('#year').val()
        // const team = $('#team').val()
        const year = '2020';
        const team = 'lakers';
        yield dataModule.playersGeneratoer(year, team);
        renderer.playersRender(dataModule);
    });
}
controller();
//# sourceMappingURL=controller-module.js.map