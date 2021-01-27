export const namespaced = true

interface State {
    name: string
    storeName: string
}

export const state: State = {
    name: 'default name',
    storeName: 'popup',
}

export const mutations = {
    SET_NAME(state: State, name: string) {
        state.name = name
    },
}
