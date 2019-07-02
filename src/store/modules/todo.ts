export interface TodoProps {
    id: number,
    complete: boolean,
    content: string
}

export interface TodoState {
    todo: TodoProps[]
}

const ADD: string = "todo/add";
const CHANGE: string = "todo/change";
const REMOVE: string = "todo/remove";

interface AddAction {
    type: typeof ADD,
    payload: TodoProps
}

interface ChangeAction {
    type: typeof CHANGE,
    meta: {
        id: number,
        content: string
    },
}

interface RemoveAction {
    type: typeof REMOVE,
    meta: {
        id: number,
    }
}

export type TodoActionTypes = AddAction | ChangeAction | RemoveAction;

let AUTO_ID = 2;

export const todoAdd = (content: string): TodoActionTypes => {
    return {
      type: ADD,
      payload: {
          id: AUTO_ID++,
          complete: false,
          content
      }
    };
}

export const todoChange = (id: number, content: string): TodoActionTypes => {
    return {
        type: CHANGE,
        meta: {
            id,
            content
        },
    }
}

export const todoRemove = (id: number): TodoActionTypes => {
    return {
        type: REMOVE,
        meta: {
            id,
        },
    }
}

const initState: TodoState = {
    todo: [
        {
            id: 0,
            complete: true,
            content: 'go to pohang'
        },
        {
            id: 1,
            complete: false,
            content: 'go to seoul'
        }
    ]
};

export default function todoReducer (
    state = initState,
    action: TodoActionTypes
): TodoState {
    switch (action.type) {
        case ADD:
            return {
                todo: [...state.todo, (action as AddAction).payload]
            };
        case CHANGE:
            return {
                todo: state.todo.map(each => {
                    if (each.id === (action as ChangeAction).meta.id) {
                        return ({
                            ...each,
                            content: (action as ChangeAction).meta.content
                        })
                    }
                    return each
                }),
            };
        case REMOVE:
            return {
                todo: state.todo.filter(each => each.id !== (action as RemoveAction).meta.id),
            }
        default:
            return state;
    }
};
