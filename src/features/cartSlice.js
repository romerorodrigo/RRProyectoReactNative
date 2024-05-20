import { createSlice } from "@reduxjs/toolkit"

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        value: {
            user: "userIdLogged",
            updatedAt: new Date().toLocaleString(),
            total: null,
            items: [],
        },
    },
    reducers: {
        addCartItem: (state, { payload }) => {
            const productRepeated = state.value.items.find((item) => item.id === payload.id)
            if (productRepeated) {
                const itemsUpdated = state.value.items.map((item) => {
                    if (item.id === payload.id) {
                        item.quantity += payload.quantity
                        return item
                    }
                    return item
                })
                const total = itemsUpdated.reduce(
                    (acc, currentItem) =>
                        (acc += currentItem.price * currentItem.quantity),
                    0
                )
                state.value = {
                    ...state.value,
                    items: itemsUpdated,
                    total,
                    updatedAt: new Date().toLocaleString(),
                }
            } else {
                state.value.items.push(payload)
                const total = state.value.items.reduce(
                    (acc, currentItem) =>
                        (acc += currentItem.price * currentItem.quantity),
                    0
                )
                state.value = {
                    ...state.value,
                    total,
                    updatedAt: new Date().toLocaleString(),
                }
            }
        },
        removeCartItem: (state, { payload }) => {
            const productRepeated = state.value.items.find((item) => item.id === payload.id)

            if (productRepeated) {
                const itemsUpdated = state.value.items.map(item => {
                    if (item.id === payload.id) {
                        const newQuantity = item.quantity - 1;
                        return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
                    }
                    return item;
                }).filter(item => item !== null);

                const total = itemsUpdated.reduce(
                    (acc, currentItem) => acc + currentItem.price * currentItem.quantity,
                    0
                );

                state.value.items = itemsUpdated;
                state.value.total = total;
                state.value.updatedAt = new Date().toLocaleString();
            }
        }
    },
})

export const { addCartItem, removeCartItem } = cartSlice.actions
export default cartSlice.reducer