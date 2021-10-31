const template = document.createElement('template')

template.innerHTML = `
  <section>
    <!-- Nav --->
    <!-- content-slot -->
  </section>
`

customElements.define('mfm-page-section',
/**
 * Custom element mfm-section-nav.
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
