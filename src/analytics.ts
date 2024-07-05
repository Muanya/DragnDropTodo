
enum Role {ADMIN, GENERAL, SEMI_ADMIN}

let data = {
    name: "James",
    occupation: "Trader",
    role: Role.ADMIN
}

console.log(data.role);
console.log(data.name);
console.log(data.occupation);


function Logger(){
    console.log("Decorator called...");

    return function(cls: any){
       let p = new cls()
       console.log(typeof cls);
       
       console.log(p.name);
       
    }
    
}

@Logger()
class Testy {
    name: string = "Testy"
    constructor(){
        console.log("Initializing testy...");
        
    }
}



@Logger()
class Profile {
    constructor(private name: string){
        console.log("Initializing testy...");
        
    }
}




let iu = new Profile("max")


