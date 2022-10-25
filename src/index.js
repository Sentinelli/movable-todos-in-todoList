import React from 'react'
import { createRoot } from 'react-dom/client'

import { TodoListContainer } from './pages/TodoListPage'
import './index.css'

const container = document.getElementById('root')

const root = createRoot(container)

root.render(<TodoListContainer />)
