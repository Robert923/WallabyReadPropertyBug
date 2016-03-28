import * as _ from 'lodash';
import * as moment_ from 'moment';
// const moment:moment.MomentStatic = (<any>moment_)['default'] || moment_;
import Moment = moment.Moment;

import ISomeInterface from '../lib/interface';

export default class MockInterfaceImpl implements ISomeInterface {
    public getProperty() : string {
        return "Hello world";
    }
    
    public doCalculation( n:number, dateOfConversion:Moment, optionalArg?:string ) {
        return n * 2;
    }
}