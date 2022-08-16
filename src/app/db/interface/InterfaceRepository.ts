export default interface InterfaceRepository{
    //attributes, filter, order, withoutIncludes
    // async
     findAll(withoutIncludes: boolean): void;
}