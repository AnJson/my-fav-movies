const template = document.createElement('template')

template.innerHTML = `
  <style>
    #main-content {
      width: 100%;
      padding: 4rem 8rem;
      display: flex;
      flex-wrap: wrap;
      gap: 4rem;
      box-sizing: border-box;
    }
    .page-section {
      width: 100%;
    }
  </style>
  <main id="main-content">
    <slot class="page-section" id="movie-section" name="movie-section"></slot>
    <slot class="page-section" id="list-section" name="list-section"></slot>
  </main>
`

customElements.define('mfm-main-content',
  /**
   * Custom element mfm-main-content.
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
