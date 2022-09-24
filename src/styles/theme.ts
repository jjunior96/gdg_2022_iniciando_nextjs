export default {
  grid: {
    container: '96rem',
    gutter: '3.2rem'
  },
  components: {
    sidebar: '20rem',
    header: '8rem'
  },
  border: {
    radius: '0.4rem'
  },
  box: {
    shadow: '0 8px 8px rgba(0, 0, 0, 0.2)'
  },
  font: {
    family:
      "Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xxxxsmall: '0.8rem',
      xxxsmall: '1.2rem',
      xxsmall: '1.4rem',
      xsmall: '1.6rem',
      small: '2rem',
      medium: '2.4rem',
      large: '3.2rem',
      xlarge: '4rem',
      xxlarge: '4.8rem',
      xxxlarge: '5.6rem',
      huge: '6.4rem'
    }
  },
  colors: {
    primary: '#24A66B',
    secundary: '#5855E9',
    white: '#FAFAFA',
    gray_50: '#f0efeb',
    gray_100: '#D9D9D9',
    gray_200: '#91AAB4',
    gray_300: '#3E606F',
    gray_450: '#193441',
    gray_500: '#343a40',
    yellow_300: '#F1C40F',
    purple_100: '#7F57DF',
    purple_300: '#5855E9',
    green: '#24A66B',
    red: '#E63737',
    success: '#24A66B',
    error: '#E63737',
    info: '#189CEF',
    black: '#0D0D0D'
  },
  spacings: {
    xxxsmall: '0.8rem',
    xxsmall: '1rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  modal: {
    sizes: {
      small: '40rem',
      medium: '48rem',
      large: '54rem'
    }
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const;
