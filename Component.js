/**
 * Base component class that manages re-renders.
 */
export default class Component {
  /**
   * @param {object} props
   * @param {HTMLElement} props.parentNode The parent node that this
   *    component will be appended to.
   * @returns {Component}
   */
  constructor(props = {}) {
    this.props = props;
    this.state = {};
    /**
     * @type {HTMLElement} A reference to this component's HTML node if it has
     *    already been mounted to the DOM.
     */
    this.refNode = null;
  }

  baseRender() {
    // Call child method.
    const newNode = this.render();

    if (this.refNode) {
      this.props.parentNode.replaceChild(newNode, this.refNode);
    } else {
      this.props.parentNode.appendChild(newNode);
      // Called on first render only.
      this.componentDidMount();
    }
    this.refNode = newNode;
  }

  /**
   * Updates the component's state and triggers render and other lifecycle
   * methods.
   * @param {object} newState KVPs to be updated.
   * @returns {void}
   */
  setState(newState = {}) {
    this.state = { ...this.state, ...newState };
    this.baseRender();
  }
}
