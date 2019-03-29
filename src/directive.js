import colors from './colors';

let isBind = false;
let elStyle = null;

const defaultConfig = {
  duration: '2s',
  timing: 'ease-in',
  colors,
  delay: 2000
};

const getRandomColor = colors => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors.splice(randomIndex, 1)[0];
};

const setStyle = ({el, key, value}) => {
  el.style[key] = value;
}

const colorInterval = ({el, colors, index, delay}) => {
  setStyle({
    el,
    key: 'backgroundColor',
    value: colors[index]
  });

  if (index < colors.length - 1) {
    index++;
  } else {
    index = 0;
  }

  if (isBind) {
    setTimeout(function() {
      colorInterval({
        el,
        colors,
        index,
        delay
      });
    }, delay);
  }
};

export default {
  bind(el, binding) {
    isBind = true;
    elStyle = el.getAttribute('style');

    const {duration, timing, colors, delay} = Object.assign({}, defaultConfig, binding.value);
    const transitionValue = ['background-color', duration, timing, '0s'].join(' ');
    setStyle({
      el,
      key: 'transition',
      value: transitionValue
    });

    const isRandom = Boolean(binding.modifiers.random);
    const renderColors = [...colors];
    if (isRandom) {
      const _colors = [...colors];
      const colorLength = _colors.length;

      renderColors.length = 0;
      for (let i=0; i<colorLength; i++) {
        const color = getRandomColor(_colors);
        renderColors.push(color);
      }
    }

    setStyle({
      el,
      key: 'backgroundColor',
      value: 'transparent'
    });

    const renderStyleDelay = 0;
    setTimeout(function(){
      let renderIndex = 0;
      colorInterval({
        el,
        colors: renderColors,
        index: renderIndex,
        delay
      });
    }, renderStyleDelay);
  },
  unbind(el) {
    isBind = false;
    el.style = elStyle;
  }
}