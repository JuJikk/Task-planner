export interface Todo{
    _id: number;
    title: string;
    done: boolean;
}

export interface TodoCreate {
    done: boolean;
    title: string;
}

export interface TodoItemProps {
    todo: Todo;
    changeData: () => void,
}
