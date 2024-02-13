import { create } from 'zustand'

const useStore = create((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}))

function Counter() {
  const { count, inc } = useStore()
  return (
    <div class="counter">
      <span>{count}</span>
      <button onClick={inc}>one up</button>
    </div>
  )
}

function App() {
  return (
    <div>
      <div>hello</div>
      <div>hello</div>
      <div>{Counter()}</div>
    </div>
  )
}

export default App
