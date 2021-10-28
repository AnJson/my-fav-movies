const template = document.createElement('template')

template.innerHTML = `
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&family=Ubuntu:wght@300;400;500;700&display=swap');

    #header {
      display: block;
      height: 12rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgb(58, 194, 238);
      color: #fff;
      box-sizing: border-box;
    }

    #header h1 {
      font-family: 'Ubuntu', sans-serif;
      font-weight: 400;
      font-size: 4rem;
      color: #fff;
    }
  </style>
  <header id="header">
    <h1>Header</h1>
    <slot></slot>
  </header>
`

customElements.define('mfm-header',
  /**
   * Custom element mfm-header.
   *
   **/
  class extends HTMLElement {
    /**
     * Attach open shadow-dom.
     *
     */
    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))
    }
  })
