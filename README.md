## Credit
Tutorial by [Code With Antonio](https://www.youtube.com/@codewithantonio) - https://www.youtube.com/watch?v=5miHyP6lExg&list=LL&index=3

### Created With
- Next.js 13
- Tailwindcss
- TypeScript
- Headless UI
- Zustand
- Stripe

### Learnings
- Headless UI component library.
- Stripe checkout.
 ```js
 const onCheckout = async () => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      {
        productIds: items.map((item) => item.id),
      }
 );
  ```
- Stripe webhooks.
- How to implement the latest caching techniques in Next.js 13.
