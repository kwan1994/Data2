import * as b from 'bobril';
import {create as fixedPoints} from './Task2 - closures/page';
import {create as main} from './mainPage';
import {create as functionalDependencies} from './Task3 - functional dependencies/page';


export const mainPage:b.IRoute = {handler: main};
export const closurePage:b.IRoute = {handler: fixedPoints,url:'/fixedPoints',name:'fixedPoints'};
export const functionalDependenciesPage = {handler: functionalDependencies, url:'/functionalDependencies',name:'functionalDependencies'}
export const defaultPage = mainPage;