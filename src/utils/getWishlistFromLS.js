export const getWishlistFromLS = () => {
    const data = localStorage.getItem('wishlist')
    const items = data ? JSON.parse(data) : []

    return {
        items: items,
    }
}
