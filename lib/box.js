const { css } = require(`styled-components`);

module.exports = {
  /**
   * Normalizes an element container.
   */
  default: () => {
    return css`
      box-sizing: border-box;
      display: block;
    `;
  },

  fill: () => {
    return css`
      box-sizing: border-box;
      display: block;
      height: 100%;
      width: 100%;
    `;
  },

  cover: () => {
    return css`
      box-sizing: border-box;
      display: block;
      height: auto;
      min-height: 100vh;
      overflow: hidden;
      width: 100vw;
    `;
  },

  /**
   * Transforms an element to a flex box where the child elements are horizontally
   * aligned.
   *
   * @param alignment Alignment style of child elements.
   */
  flexh: (alignment = `cc`) => {
    let t;

    switch (alignment) {
    case `tl`:
      t = css`
        align-items: flex-start;
        justify-content: flex-start;
      `;
      break;
    case `tc`:
      t = css`
        align-items: flex-start;
        justify-content: center;
      `;
      break;
    case `tr`:
      t = css`
        align-items: flex-start;
        justify-content: flex-end;
      `;
      break;
    case `cl`:
      t = css`
        align-items: center;
        justify-content: flex-start;
      `;
      break;
    case `cr`:
      t = css`
        align-items: center;
        justify-content: flex-end;
      `;
      break;
    case `bl`:
      t = css`
        align-items: flex-end;
        justify-content: flex-start;
      `;
      break;
    case `bc`:
      t = css`
        align-items: flex-end;
        justify-content: center;
      `;
      break;
    case `br`:
      t = css`
        align-items: flex-end;
        justify-content: flex-end;
      `;
      break;
    default:
      t = css`
        align-items: center;
        justify-content: center;
      `;
    }

    return css`
      ${t}
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
    `;
  },

  /**
   * Transforms an element to a flex box where the child elements are vertically
   * aligned.
   *
   * @param alignment Alignment style of child elements.
   */
  flexv: (alignment = `cc`) => {
    let t;

    switch (alignment) {
    case `tl`:
      t = css`
        align-items: flex-start;
        justify-content: flex-start;
      `;
      break;
    case `tc`:
      t = css`
        align-items: center;
        justify-content: flex-start;
      `;
      break;
    case `tr`:
      t = css`
        align-items: flex-end;
        justify-content: flex-start;
      `;
      break;
    case `cl`:
      t = css`
        align-items: flex-start;
        justify-content: center;
      `;
      break;
    case `cr`:
      t = css`
        align-items: flex-end;
        justify-content: center;
      `;
      break;
    case `bl`:
      t = css`
        align-items: flex-start;
        justify-content: flex-end;
      `;
      break;
    case `bc`:
      t = css`
        align-items: center;
        justify-content: flex-end;
      `;
      break;
    case `br`:
      t = css`
        align-items: flex-end;
        justify-content: flex-end;
      `;
      break;
    default:
      t = css`
        align-items: center;
        justify-content: center;
      `;
    }

    return css`
      ${t}
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
    `;
  }
}
