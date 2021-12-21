import { useEffect, useState } from 'react'

type ItemId = string

type Item = {
  id: string
  quantity: number
}

type Cart = Item[]

type AddItem = (product: Item) => void

type RemoveItem = (product: ItemId) => void

type UpdateItem = (product: ItemId, quantity: number) => void

type ClearCart = () => void

export const useShoppingCart = () => {
  const [cart, setCart] = useState<Cart>(() => {
    const cart = localStorage.getItem('cart')
    return cart ? JSON.parse(cart) : []
  })

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const getCart = () => {
    return cart
  }

  const addToCart: AddItem = ({ id, quantity = 1 }) => {
    const item = cart.find((item: Item) => item.id === id)
    if (item) {
      updateProduct(id, item.quantity + quantity)
    } else {
      setCart([...cart, { id, quantity }])
    }
  }

  const removeFromCart: RemoveItem = (productId) => {
    const newCart = cart.filter((product: Item) => product.id !== productId)
    setCart(newCart)
  }

  const clearCart: ClearCart = () => {
    setCart([])
  }

  const updateProduct: UpdateItem = (productId, quantity) => {
    const newCart = cart.map((product: Item) => {
      if (product.id === productId) {
        return { ...product, quantity }
      }
      return product
    })
    setCart(newCart)
  }

  return {
    getCart,
    addToCart,
    removeFromCart,
    clearCart,
    updateProduct
  }
}
