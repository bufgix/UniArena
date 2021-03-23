const ColorAlpha = (color: string, alpha: number): string =>
  `${color}${Math.floor(alpha * 255).toString(16)}`;

const ColorDark = '#1F1F1F';
const ColorPrimary = '#B52525';
const ColorSecondary = '#EC407A';
const ColorWhite = '#FFFFFF';

export default {
  Dark: ColorDark,
  Dark5: 'rgba(31, 31, 31, 0.05)',
  Dark10: ColorAlpha(ColorDark, 0.1),
  Dark20: ColorAlpha(ColorDark, 0.2),
  Dark30: ColorAlpha(ColorDark, 0.3),
  Dark40: ColorAlpha(ColorDark, 0.4),
  Dark50: ColorAlpha(ColorDark, 0.5),
  Dark60: ColorAlpha(ColorDark, 0.6),
  Dark70: ColorAlpha(ColorDark, 0.7),

  White: ColorWhite,
  White60: ColorAlpha(ColorWhite, 0.6),

  Red: '#F00',
  WhiteGray: '#F5F6FA',
  Disable: 'rgba(54, 168, 252, 0.5);',
  Gray: '#6F869D',
  Green: '#4CAF50',
  DarkBlue: '#0B276A',
  InputDisable: '#F5F6F8',

  Primary: ColorPrimary,
  PrimaryDisable: 'rgba(98, 127, 174, 0.4)',
  Secondary: ColorSecondary,
  PassivePrimary: '#B2D7FF',

  Success: '#5abb62',
  Warning: '#f2994a',
  Danger: '#eb5757',
};
