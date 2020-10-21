import { EasingLogic } from 'ngx-page-scroll-core';

/**
 * Easing Logic for easeInOutExpo easing
 * @param t current time
 * @param b beginning value
 * @param c change in value
 * @param d duration
 */
export function easeInOutExpo(t: number, b: number, c: number, d: number): number {
  if (t === 0) {
    return b;
  }

  if (t === d) {
    return b + c;
  }

  t /= d / 2;
  if (t < 1) {
    return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
  }

  return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
}

export const EASE_IN_OUT_EXPO: EasingLogic = easeInOutExpo;
