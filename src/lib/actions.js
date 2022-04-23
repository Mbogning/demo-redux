export const ACTIONS = {
    INCREMENT: "INCREMENT",
    DECREMENT: "DECREMENT",
    INCREMENTBY: "INCREMENTBY",
    DECREMENTBY: "DECREMENTBY"
}


export function increment() {
    return {
        type: ACTIONS.INCREMENT
    }
}

export function decrement() {
    return {
        type: ACTIONS.DECREMENT
    }
}

export function incrementBy(value) {
    return {
        type: ACTIONS.INCREMENTBY,
        payload: value
    }
}

export function decrementBy(value) {
    return {
        type: ACTIONS.DECREMENTBY,
        payload: value

    }
}