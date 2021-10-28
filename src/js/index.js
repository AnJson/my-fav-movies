import './components/mfm-header'
import './components/mfm-main-content'
import './components/mfm-section'

const app = document.querySelector('#app') // Root element for appending the application

// -----------------------------
// Header
// -----------------------------

const header = document.createElement('mfm-header')

// -----------------------------
// Content
// -----------------------------

const main = document.createElement('mfm-main-content')
const moviesSlot = main.shadowRoot.querySelector('#movie-section')
const listSlot = main.shadowRoot.querySelector('#list-section')

const sections = [document.createElement('mfm-section'), document.createElement('mfm-section')]

moviesSlot.appendChild(sections[0])
listSlot.appendChild(sections[1])

// -----------------------------
// Appending to #app
// -----------------------------

app.appendChild(header)
app.appendChild(main)
