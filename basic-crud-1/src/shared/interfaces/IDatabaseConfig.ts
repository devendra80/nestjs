import { IDatabaseConfigAttributes } from "./IDatabaseConfigAttributes ";

export interface IDatabaseConfig {
     development: IDatabaseConfigAttributes;
     test: IDatabaseConfigAttributes;
     production: IDatabaseConfigAttributes;
 }