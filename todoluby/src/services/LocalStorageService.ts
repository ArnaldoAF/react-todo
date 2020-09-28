import  React from 'react';
import TaskItemProps from "../interfaces/TaskItemProps";


export function  getListString():string {
    console.log("getListString");
    return localStorage.getItem("@todoluby/tasks") || "";
}

export function  getListAsObject():TaskItemProps[] {
    console.log("getListAsObject");
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
    console.log("setList",list);
    localStorage.setItem("@todoluby/tasks", JSON.stringify(list));
}

export function cleanList() {
    console.log("cleanList");
    localStorage.removeItem("@todoluby/tasks");
}


export function getItem(index: number):TaskItemProps {
    console.log("getItem");
    var localList = getListAsObject();
    var localItem = localList[index];

    return localItem;
}

export function addItem(item: TaskItemProps) {
    console.log("addItem");
    var localList = getListAsObject();
    localList.push(item);

    console.log(localList);
    setList(localList);
}

export function editItem(item: TaskItemProps, index: number) {
    console.log("editItem");
    console.log(item);
    var localList = getListAsObject();
    console.log(localList);
    localList[index] = item;
    console.log(localList[index]);
    setList(localList);
}


export function deleteItem(index: number) {
    console.log("deleteItem");
    var localList = getListAsObject();
    localList.splice(index,1);
    setList(localList);
}

