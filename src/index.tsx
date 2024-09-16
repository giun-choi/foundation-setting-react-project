import { createRoot } from 'react-dom/client'
import App from './App'

const domNode = document.getElementById('root')

if (domNode) {
  // https://react.dev/reference/react-dom/client/createRoot#createroot
  const root = createRoot(domNode)

  root.render(<App />)
} else {
  console.error('The root element does not exist.')
}
