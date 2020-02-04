// ES5 ------------------------------------
(function (g) {
    var instance;
    
    g.Singleton = function () {
        if (instance) {
            return instance;
        }
        return instance = this;
    }
})(window || global);


// TS -----------------------------------------
class Singleton {
    protected static _instance: Singleton;

    constructor() {
        if (Singleton._instance) {
            throw new Error('Error: call Singleton.getInstance() to get instance.');
        }
        Singleton._instance = this;
    }

    public static getInstance(): Singleton {
        if (Singleton._instance) {
            return Singleton._instance;
        }
        return Singleton._instance = new Singleton();
    }
}

// TS namespace --------------------------
namespace Singleton {
    interface Instance {}

    const instance: Instance = {};

    export function getInstance(): Instance {
        return instance;
    }
}

// TS module -------------------------
// singleton.ts
module Singleton {
    class Instance {
        constructor(public value: string = 'Some value') {}
    }

    let instance = new Instance();

    export function getInstance(): Instance {
        return instance;
    }
}

// app.ts
import * as Singleton from 'singleton.ts';
Singleton.getInstance();