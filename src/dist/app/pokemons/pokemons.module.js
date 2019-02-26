"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var list_pokemon_component_1 = require("./list-pokemon.component");
var detail_pokemon_component_1 = require("./detail-pokemon.component");
var border_card_directive_1 = require("./border-card.directive");
var pokemon_type_color_pipe_1 = require("./pokemon-type-color.pipe");
var pokemons_routing_module_1 = require("./pokemons-routing.module");
var pokemons_service_1 = require("./pokemons.service");
var pokemon_from_component_1 = require("./pokemon-from.component");
var edit_pokemon_component_1 = require("./edit-pokemon.component");
var PokemonsModule = (function () {
    function PokemonsModule() {
    }
    PokemonsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                pokemons_routing_module_1.PokemonRoutingModule
            ],
            declarations: [
                list_pokemon_component_1.ListPokemonComponent,
                detail_pokemon_component_1.DetailPokemonComponent,
                pokemon_from_component_1.PokemonFormComponent,
                edit_pokemon_component_1.EditPokemonComponent,
                border_card_directive_1.BorderCardDirective,
                pokemon_type_color_pipe_1.PokemonTypeColorPipe
            ],
            providers: [pokemons_service_1.PokemonsService],
        })
    ], PokemonsModule);
    return PokemonsModule;
}());
exports.PokemonsModule = PokemonsModule;
//# sourceMappingURL=pokemons.module.js.map