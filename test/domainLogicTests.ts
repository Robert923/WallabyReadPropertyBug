import * as _ from 'lodash';

import * as moment_ from 'moment';
const moment:moment.MomentStatic = (<any>moment_)['default'] || moment_;
import Moment = moment.Moment;

import * as chai from 'chai';
const assert = chai.assert;
const expect = chai.expect;

import * as domainLogic from '../lib/domainLogic';

// If the class is defined in another file, things break after the first time;
// Start Walaby.js and everything passes - make a small change to this file
// (say, press space on an empty line) and the unit test will fail.
import MockInterfaceImpl from './mockInterfaceImpl';

// Things work if the class is defined here
// import ISomeInterface from '../lib/interface';
// class MockInterfaceImpl implements ISomeInterface {
//     public getProperty() : string {
//         return "Hello world";
//     }
    
//     public doCalculation( n:number, dateOfConversion:Moment, optionalArg?:string ) {
//         return n * 2;
//     }
// }

describe('Reproduces the problem', () => {

    it('Runs fine in mocha (even with watch), runs fine once with Wallaby, but make a change to this file and it crashes', () => {
        const date = moment('2015-01-01');
        const value = 2936.26;
        const isi = new MockInterfaceImpl();
        
        const sut = new domainLogic.ChildClass(date, value);
        const actualResult = sut.doSomethingImportant(isi);
        
        assert.equal(actualResult, 'Hello world');
    });
});
