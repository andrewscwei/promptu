const { css } = require(`styled-components`);

module.exports = {
  abs: (alignment = `cc`) => {
    let t;

    switch (alignment) {
    case `tl`:
      t = css`
        bottom: unset;
        left: 0;
        margin: 0;
        right: unset;
        top: 0;
      `;
      break;
    case `tc`:
      t = css`
        bottom: unset;
        left: 0;
        margin: 0 auto;
        right: 0;
        top: 0;
      `;
      break;
    case `tr`:
      t = css`
        bottom: unset;
        left: unset;
        margin: 0;
        right: 0;
        top: 0;
      `;
      break;
    case `cl`:
      t = css`
        bottom: 0;
        left: 0;
        margin: auto 0;
        right: unset;
        top: 0;
      `;
      break;
    case `cr`:
      t = css`
        bottom: 0;
        left: unset;
        margin: auto 0;
        right: 0;
        top: 0;
      `;
      break;
    case `bl`:
      t = css`
        bottom: 0;
        left: 0;
        margin: 0;
        right: unset;
        top: unset;
      `;
      break;
    case `bc`:
      t = css`
        bottom: 0;
        left: 0;
        margin: 0 auto;
        right: 0;
        top: unset;
      `;
      break;
    case `br`:
      t = css`
        bottom: 0;
        left: unset;
        margin: 0;
        right: 0;
        top: unset;
      `;
      break;
    default:
      t = css`
        bottom: 0;
        left: 0;
        margin: auto;
        right: 0;
        top: 0;
      `;
    }

    return css`
      ${t}
      position: absolute;
    `;
  },
  fixed: (alignment = `cc`) => {
    let t;

    switch (alignment) {
    case `tl`:
      t = css`
        bottom: unset;
        left: 0;
        margin: 0;
        right: unset;
        top: 0;
      `;
      break;
    case `tc`:
      t = css`
        bottom: unset;
        left: 0;
        margin: 0 auto;
        right: 0;
        top: 0;
      `;
      break;
    case `tr`:
      t = css`
        bottom: unset;
        left: unset;
        margin: 0;
        right: 0;
        top: 0;
      `;
      break;
    case `cl`:
      t = css`
        bottom: 0;
        left: 0;
        margin: auto 0;
        right: unset;
        top: 0;
      `;
      break;
    case `cr`:
      t = css`
        bottom: 0;
        left: unset;
        margin: auto 0;
        right: 0;
        top: 0;
      `;
      break;
    case `bl`:
      t = css`
        bottom: 0;
        left: 0;
        margin: 0;
        right: unset;
        top: unset;
      `;
      break;
    case `bc`:
      t = css`
        bottom: 0;
        left: 0;
        margin: 0 auto;
        right: 0;
        top: unset;
      `;
      break;
    case `br`:
      t = css`
        bottom: 0;
        left: unset;
        margin: 0;
        right: 0;
        top: unset;
      `;
      break;
    default:
      t = css`
        bottom: 0;
        left: 0;
        margin: auto;
        right: 0;
        top: 0;
      `;
    }

    return css`
      ${t}
      position: fixed;
    `;
  },
};
