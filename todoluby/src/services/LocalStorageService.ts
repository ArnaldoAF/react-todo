import TaskItemProps from "../interfaces/TaskItemProps";
import { OrderByProperty } from '../utils/OrderByProperty';

//FUNÇÕES LISTA
export function  getListString():string {
    return localStorage.getItem("@todoluby/tasks") || "";
}

export function  getListAsObject():TaskItemProps[] {
    var localListJson = getListString();
    var localListObj = [];
    try {
        localListObj = JSON.parse(localListJson);
    } catch {
        localListObj = [];
        cleanList();
    }

    return localListObj;
}

export function setList(list: TaskItemProps[]) {
    localStorage.setItem("@todoluby/tasks", JSON.stringify(list));
}

export function cleanList() {
    localStorage.removeItem("@todoluby/tasks");
}

export function DeleteMarked() {
    var localList = getListAsObject();
    var cleanList = localList.filter(task => !task.checked);
    setList(cleanList);
    return cleanList;
}

//FUNÇÕES ITENS
export function getItem(index: number):TaskItemProps {
    var localList = getListAsObject();
    var localItem = localList[index];

    return localItem;
}

export function addItem(item: TaskItemProps) {
    var localList = getListAsObject();
    localList.push(item);

    setList(localList);
}

export function editItem(item: TaskItemProps, index: number) {
    var localList = getListAsObject();
    localList[index] = item;
    setList(localList);
}

export function deleteItem(index: number) {
    var localList = getListAsObject();
    localList.splice(index,1);
    setList(localList);
}

//FUNÇÕES DE ORDENAR
export function OrderByName():TaskItemProps[] {
    var localList = getListAsObject();
    var orderedList = OrderByProperty(localList, "name");
    setList(orderedList);
    return orderedList;
}

export function OrderByChecked() {
    var localList = getListAsObject();
    var orderedList = OrderByProperty(localList, "checked");
    setList(orderedList);
    return orderedList;
}
