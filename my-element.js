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
export class MyElement extends LitElement {
  static get styles () {
    return css`
    p {
      color: blue;
      width: 80%;
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
}

window.customElements.define('my-element', MyElement);
