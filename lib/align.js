exports.abs = (alignment = 'cc') => {
  let t;

  switch (alignment) {
  case 'tl':
    t = `
      bottom: unset;
      left: 0;
      margin: 0;
      right: unset;
      top: 0;
    `;
    break;
  case 'tc':
    t = `
      bottom: unset;
      left: 0;
      margin: 0 auto;
      right: 0;
      top: 0;
    `;
    break;
  case 'tr':
    t = `
      bottom: unset;
      left: unset;
      margin: 0;
      right: 0;
      top: 0;
    `;
    break;
  case 'cl':
    t = `
      bottom: 0;
      left: 0;
      margin: auto 0;
      right: unset;
      top: 0;
    `;
    break;
  case 'cr':
    t = `
      bottom: 0;
      left: unset;
      margin: auto 0;
      right: 0;
      top: 0;
    `;
    break;
  case 'bl':
    t = `
      bottom: 0;
      left: 0;
      margin: 0;
      right: unset;
      top: unset;
    `;
    break;
  case 'bc':
    t = `
      bottom: 0;
      left: 0;
      margin: 0 auto;
      right: 0;
      top: unset;
    `;
    break;
  case 'br':
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
};

exports.fixed = (alignment = 'cc') => {
  let t;

  switch (alignment) {
  case 'tl':
    t = `
      bottom: unset;
      left: 0;
      margin: 0;
      right: unset;
      top: 0;
    `;
    break;
  case 'tc':
    t = `
      bottom: unset;
      left: 0;
      margin: 0 auto;
      right: 0;
      top: 0;
    `;
    break;
  case 'tr':
    t = `
      bottom: unset;
      left: unset;
      margin: 0;
      right: 0;
      top: 0;
    `;
    break;
  case 'cl':
    t = `
      bottom: 0;
      left: 0;
      margin: auto 0;
      right: unset;
      top: 0;
    `;
    break;
  case 'cr':
    t = `
      bottom: 0;
      left: unset;
      margin: auto 0;
      right: 0;
      top: 0;
    `;
    break;
  case 'bl':
    t = `
      bottom: 0;
      left: 0;
      margin: 0;
      right: unset;
      top: unset;
    `;
    break;
  case 'bc':
    t = `
      bottom: 0;
      left: 0;
      margin: 0 auto;
      right: 0;
      top: unset;
    `;
    break;
  case 'br':
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
};

exports.tl = exports.abs('tl');

exports.tc = exports.abs('tc');

exports.tr = exports.abs('tr');

exports.cl = exports.abs('cl');

exports.cc = exports.abs('cc');

exports.cr = exports.abs('cr');

exports.bl = exports.abs('bl');

exports.bc = exports.abs('bc');

exports.br = exports.abs('br');

exports.ftl = exports.fixed('tl');

exports.ftc = exports.fixed('tc');

exports.ftr = exports.fixed('tr');

exports.fcl = exports.fixed('cl');

exports.fcc = exports.fixed('cc');

exports.fcr = exports.fixed('cr');

exports.fbl = exports.fixed('bl');

exports.fbc = exports.fixed('bc');

exports.fbr = exports.fixed('br');
