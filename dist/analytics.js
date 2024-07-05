"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["GENERAL"] = 1] = "GENERAL";
    Role[Role["SEMI_ADMIN"] = 2] = "SEMI_ADMIN";
})(Role || (Role = {}));
let data = {
    name: "James",
    occupation: "Trader",
    role: Role.ADMIN
};
console.log(data.role);
console.log(data.name);
console.log(data.occupation);
function Logger() {
    console.log("Decorator called...");
    return function (cls) {
        let p = new cls();
        console.log(typeof cls);
        console.log(p.name);
    };
}
let Testy = class Testy {
    constructor() {
        this.name = "Testy";
        console.log("Initializing testy...");
    }
};
Testy = __decorate([
    Logger()
], Testy);
let Profile = class Profile {
    constructor(name) {
        this.name = name;
        console.log("Initializing testy...");
    }
};
Profile = __decorate([
    Logger()
], Profile);
let iu = new Profile("max");
//# sourceMappingURL=analytics.js.map