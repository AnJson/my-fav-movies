const template = document.createElement('template')

template.innerHTML = `
<style>
  .loader-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .loader {
    position: relative;
    display: block;
    width: 4rem;
    height: 4rem;
  }
  .loader::after {
    content: " ";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 6px solid rgb(58, 194, 238);
    border-color: rgb(58, 194, 238) transparent transparent;
    animation: pulse-ring 1s linear infinite;
  }

  .loader::before {
    content: " ";
    position: absolute;
    width: 80%;
    height: 80%;
    top: 53%;
    left: 53%;
    border-radius: 50%;
    border: 6px solid rgb(255, 175, 97);
    border-color: transparent transparent rgb(255, 175, 97);
    animation: pulse-ring-translate 0.6s linear infinite;
  }

  @keyframes pulse-ring-translate {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    50% {
      border-width: 1px;
      transform: translate(-50%, -50%) rotate(180deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
      border-width: 6px;
    }
  }

  @keyframes pulse-ring {
    0% {
      transform: rotate(0deg);
    }
    50% {
      border-width: 1px;
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
      border-width: 6px;
    }
  }
</style>
  <div class="loader-container">
    <span class="loader"></span>
  </div>
`

customElements.define('mfm-loader',
  /**
   * Custom element mfm-loader.
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
