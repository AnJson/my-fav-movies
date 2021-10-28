const template = document.createElement('template')

template.innerHTML = `
  <style>
    li {
      display: flex;
      height: 100%;
      width: 100%;
      align-items: center;
      justify-content: center;
      font-family: 'Ubuntu', sans-serif;
      font-weight: 400;
      cursor: pointer;
    }
  </style>
  <li>
    <slot></slot>
  </li>
`

customElements.define('mfm-section-nav-element',
  /**
   * Custom element mfm-section-nav.
   *
   **/
  class extends HTMLElement {
    #isActive
    /**
     * Attach open shadow-dom.
     *
     */
    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))
      this.#isActive = false
    }

    connectedCallback () {
      this.shadowRoot.querySelector('li').addEventListener('click', this.#toggleIsActive)
    }

    /**
     * Toggle active nav-item.
     */
    #toggleIsActive (e) {
      console.log(e.target)
      if (this.#isActive) {
        return
      }

      this.#isActive = true
    }
  })
