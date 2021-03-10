module.exports = {
    prefix: '',
    purge: {
      content: [
        './src/**/*.{html,ts}',
      ]
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
      fontSize: {
        'small-11': '11px',
        'small-12': '12px',
        'xs': '.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
      },
  
  
      minHeight: {
        'minContent': 'min-content',
        'maxContent': 'max-content',
      },
     
  
      boxShadow: {
        'nfl-1': '0 4px 6px -1px rgba(0, 0, 0, 0.7), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
  
      extend: {
        height: {
          10: '2.5rem',
          minContent: 'min-content',
          maxContent: 'max-content',
        },
        padding: {
          '13': '3.25rem',
          '1px': '1px',
        },
  
        margin: {
          '1px': '1px',
        },
  
        width: {
          '16.667': '16.6666666667%',
          '140': '35rem',
        },
  
        minWidth: {
          '10': '2.5rem',
          '40': '10rem',
        },
  
        textColor: {
          'nfl-logo': '#e50914',
        }
      },
  
      backgroundImage: theme => ({
        ...theme('colors'),
        'nfl-header': 'linear-gradient(to bottom,rgba(0,0,0,.8) 10%,rgba(0,0,0,0))',
        'nfl-bottom-info-play': 'linear-gradient(to top,rgba(0,0,0,.92) 25%,rgba(0,0,0,0.18))',
      }),
  
      backgroundColor: theme => ({
        ...theme('colors'),
        'nfl': '#141414',
      }),
    },
    variants: {
      extend: {
        display: ['group-hover'],
        height: ['group-hover'],
        scale: ['active', 'group-hover'],
        zIndex: ['hover', 'active','group-hover'],
        backgroundColor:['hover','active','group-hover'],
        backgroundImage:['hover','active','group-hover']
      },
    },
    plugins: [
      require('@tailwindcss/line-clamp'),
    ],
};