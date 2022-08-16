import { Model, Op } from 'sequelize';

export default interface InterfaceModel {
    findAndPaginate(): void;
}