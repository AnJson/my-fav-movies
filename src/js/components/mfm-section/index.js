const template = document.createElement('template')

template.innerHTML = `
<style>
  @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&family=Ubuntu:wght@300;400;500;700&display=swap');

  .page-section {
      width: calc(50% - 4rem);
      height: 75vh;
      border: 1px solid rgb(58, 194, 238);
      color: #fff;
      box-sizing: border-box;
    }

    .page-section h2 {
      font-family: 'Ubuntu', sans-serif;
      font-weight: 400;
      font-size: 3.5rem;
      color: #000;
    }

    @media screen and (max-width: 1024px) {
      .page-section {
        width: 100%;
      }
    }  

    @media screen and (max-width: 1024px) {
      #main-content {
        padding: 4rem 4rem;
      }
    }

    @media screen and (max-width: 600px) {
      #main-content {
        padding: 2rem 2rem;
      }
</style>
  <section class="page-section">
    <h2>Movie-section</h2>
    <slot></slot>
  </section>
`

customElements.define('mfm-section',
  /**
   * Custom element mfm-section.
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
