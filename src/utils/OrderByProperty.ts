import TaskItemProps from "../interfaces/TaskItemProps";

export function OrderByProperty(list: TaskItemProps[], key: string, order = 'asc') {
    console.log("list.sort(compare(key)",list.sort(compare(key)));
    return list.sort(compare(key, order));
}

export function compare(key:string, order = 'asc' ) {
    return function innerSort(a:any,b:any) {
        const varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
        const varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];

        var comparison = 0;
        if (varA > varB) {
            comparison = 1;
        } else if (varA < varB) {
            comparison = -1;
        }

        return (order ==='desc') ? (comparison * -1) : comparison;
    }
}