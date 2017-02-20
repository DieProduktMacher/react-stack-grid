export const appear = rect => ({
  translateY: rect.top + 200,
  opacity: 0
});

export const appeared = rect => ({ opacity: 1, translateY: rect.top });

export const enter = appeared;

export const entered = appeared;

export const leaved = appear;
