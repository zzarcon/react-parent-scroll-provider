const isScrollable = (...values: string[]): boolean =>
  values.some((value: string): boolean =>
    (value === 'auto' || value === 'scroll'));

const isElementScrollable = (el: Element) => {
  const style = window.getComputedStyle(el);

  return isScrollable(style.overflow, style.overflowY, style.overflowX);
};

const getParentScroll = (el?: Element): Element | undefined => {
  if (!el) return document.body;

  if (!isElementScrollable(el)) {
    return getParentScroll(el.parentElement);
  }

  return el;
};

export default getParentScroll;