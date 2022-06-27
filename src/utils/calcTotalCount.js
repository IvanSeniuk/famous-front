export const calcTotalCount = (items) => {
    return items.reduce((total, obj) => obj.count + total, 0)
}
