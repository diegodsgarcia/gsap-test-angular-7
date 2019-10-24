import { morphism } from 'morphism';
import { map } from 'rxjs/operators';
import { ListResult } from './model/list-result';

function MapperFrom(schema) {
  return (target, propertyKey: string, descriptor: PropertyDescriptor) => {
    const original = descriptor.value;

    descriptor.value = function(... args: any[]) {
      const result = original.apply(this, args);
      return result.pipe(map(value => morphism(schema, value)));
    };

    return descriptor;
  };
}

function MapperListResultFrom(listSchema, resultSchema) {
  return (target, propertyKey: string, descriptor: PropertyDescriptor) => {
    const original = descriptor.value;

    descriptor.value = function(... args: any[]) {
      const result = original.apply(this, args);
      return result.pipe(map((values: ListResult<any>) => {
        const records = morphism(resultSchema, values[listSchema.records]);
        const list: any = morphism(listSchema, values);
        list.records = records;

        return list;
      }));
    };

    return descriptor;
  };
}

function Morphism(schema) {
  return function(target, propertyKey: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;

    descriptor.value = (... args: any[]) => {
      const result = original.apply(this, args);
      return morphism(schema, result);
    };

    return descriptor;
  };
}

function MapperTo(schema) {
  return (target, propertyKey: string, descriptor: PropertyDescriptor) => {
    const original = descriptor.value;

    descriptor.value = function(... args: any[]) {
      const params = args.map(arg => morphism(schema, arg));
      const result = original.apply(this, params);
      return result;
    };

    return descriptor;
  };
}

export { MapperFrom, MapperListResultFrom, MapperTo, Morphism };
