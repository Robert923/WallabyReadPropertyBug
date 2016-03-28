import * as _ from 'lodash';

import * as moment_ from 'moment';
const moment:moment.MomentStatic = (<any>moment_)['default'] || moment_;
import Moment = moment.Moment;

import ISomeInterface from './interface';


export abstract class BaseClass {
    constructor( public dateOf: Moment ) {
        // EMPTY
    }

    abstract doSomethingImportant( isi:ISomeInterface ) : string;
}


/**
 * A mortgage down payment event.
 */
export class ChildClass extends BaseClass {
    constructor(dateOf: Moment, public value:number) {
        super(dateOf);
        Object.freeze(this);
    }

    doSomethingImportant( isi:ISomeInterface ) : string {
        isi.doCalculation(this.value, this.dateOf);
        return isi.getProperty();
    }
}//class
