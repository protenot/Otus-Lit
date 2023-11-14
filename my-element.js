/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
/* export class MyElement extends LitElement {
  static get styles () {
    return css`
    p {
      color: blue;
      
    }
  `};
  static get properties()  {
    return {
    name:{type:String},
  };}
  constructor() {
    super();
    this.name = "Nobody";
  }

  render() {
    return html`<p>Hello, ${this.name}</p>`;
  }
} */

//window.customElements.define('my-element', MyElement);

class MyElement extends LitElement {
  static properties = {
    data: { type: Object },
  };
  static styles = css`
    :host {
      display: block;
      background-color: black;
    }

    div {
      color: blue;
      height: 100px;
      width: 100px;
      background-color: blue;
    }

    span {
      background-color: red;
      width: 50px;
      height: 10px;
    }

    ul {
      background-color: pink;
    }
    li {
      display: inline-block;
    }
    my-element {
      background-color: black;
    }
  `;
  constructor() {
    super();
    this.data = {};
  }

  render() {
    console.log('Rendering with data:', this.data);
    return html`
     
     <div>
        ${this.data && this.data.name ? html`<span>${this.data.name}</span>` : ''}
        ${this.data && this.data.items
          ? html`
              <ul>
                ${this.data.items.map(
                  (item) => html`<li><my-element .data=${item}></my-element></li>`
                )}
              </ul>
            `
          : ''}
      </div>
    `;
  }
}
window.customElements.define('my-element', MyElement);
//customElements.define('my-tree', MyTree);

/* class MyLeaf extends LitElement {
  static properties = {
    data: { type: Object },
  };

  constructor() {
    super();
    this.data = {};
  }

  render() {
    return html`
    
      <span>${this.data.name}</span>
    `;
  }
}

customElements.define('my-leaf', MyLeaf); */