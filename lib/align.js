module.exports = {
  abs: (alignment = `cc`) => {
    let t;

    switch (alignment) {
    case `tl`:
      t = `
        bottom: unset;
        left: 0;
        margin: 0;
        right: unset;
        top: 0;
      `;
      break;
    case `tc`:
      t = `
        bottom: unset;
        left: 0;
        margin: 0 auto;
        right: 0;
        top: 0;
      `;
      break;
    case `tr`:
      t = `
        bottom: unset;
        left: unset;
        margin: 0;
        right: 0;
        top: 0;
      `;
      break;
    case `cl`:
      t = `
        bottom: 0;
        left: 0;
        margin: auto 0;
        right: unset;
        top: 0;
      `;
      break;
    case `cr`:
      t = `
        bottom: 0;
        left: unset;
        margin: auto 0;
        right: 0;
        top: 0;
      `;
      break;
    case `bl`:
      t = `
        bottom: 0;
        left: 0;
        margin: 0;
        right: unset;
        top: unset;
      `;
      break;
    case `bc`:
      t = `
        bottom: 0;
        left: 0;
        margin: 0 auto;
        right: 0;
        top: unset;
      `;
      break;
    case `br`:
      t = `
        bottom: 0;
        left: unset;
        margin: 0;
        right: 0;
        top: unset;
      `;
      break;
    default:
      t = `
        bottom: 0;
        left: 0;
        margin: auto;
        right: 0;
        top: 0;
      `;
    }

    return `
      ${t}
      position: absolute;
    `;
  },
  fixed: (alignment = `cc`) => {
    let t;

    switch (alignment) {
    case `tl`:
      t = `
        bottom: unset;
        left: 0;
        margin: 0;
        right: unset;
        top: 0;
      `;
      break;
    case `tc`:
      t = `
        bottom: unset;
        left: 0;
        margin: 0 auto;
        right: 0;
        top: 0;
      `;
      break;
    case `tr`:
      t = `
        bottom: unset;
        left: unset;
        margin: 0;
        right: 0;
        top: 0;
      `;
      break;
    case `cl`:
      t = `
        bottom: 0;
        left: 0;
        margin: auto 0;
        right: unset;
        top: 0;
      `;
      break;
    case `cr`:
      t = `
        bottom: 0;
        left: unset;
        margin: auto 0;
        right: 0;
        top: 0;
      `;
      break;
    case `bl`:
      t = `
        bottom: 0;
        left: 0;
        margin: 0;
        right: unset;
        top: unset;
      `;
      break;
    case `bc`:
      t = `
        bottom: 0;
        left: 0;
        margin: 0 auto;
        right: 0;
        top: unset;
      `;
      break;
    case `br`:
      t = `
        bottom: 0;
        left: unset;
        margin: 0;
        right: 0;
        top: unset;
      `;
      break;
    default:
      t = `
        bottom: 0;
        left: 0;
        margin: auto;
        right: 0;
        top: 0;
      `;
    }

    return `
      ${t}
      position: fixed;
    `;
  },
};
