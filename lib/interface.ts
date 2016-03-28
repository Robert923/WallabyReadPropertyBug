import * as moment_ from 'moment';
const moment:moment.MomentStatic = (<any>moment_)['default'] || moment_;
import Moment = moment.Moment;

interface ISomeInterface {
    getProperty() : string;
    doCalculation( n:number, dateOfConversion:Moment, optionalArg?:string );
}

export default ISomeInterface;
