// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/ui', '@nuxt/content'],
  ui: {
    icons: ['mdi']
  },
  tailwindcss: {
    config: {
      content: [],
      theme: {
        extend: {
          fontFamily: {
            sans: ['BCSans', 'Verdana', 'Arial', 'sans-serif']
          },
          colors: {
            // Gray Palette
            gray0: '#f8f9fa',
            gray1: '#f1f3f5',
            gray2: '#e9ecef',
            gray3: '#dee2e6',
            gray4: '#ced4da',
            gray5: '#adb5bd',
            gray6: '#868e96',
            gray7: '#495057',
            gray8: '#343a40',
            gray9: '#212529',

            // BC GOV BLUE PALETTE
            BCgovBlue0: '#e0e7ed',
            BCgovBlue1: '#b3c2d1',
            BCgovBlue2: '#8099b3',
            BCgovBlue3: '#4d7094',
            BCgovBlue4: '#26527d',
            BCgovBlue5: '#003366', // PRIMARY BLUE,
            BCgovBlue6: '#002e5e',
            BCgovBlue7: '#002753',
            BCgovBlue8: '#002049',
            BCgovBlue9: '#001438',

            // Accent Blue
            BCgovABlue1: '#6e93ff',
            BCgovABlue2: '#3b6cff',
            BCgovABlue3: '#0846ff',
            BCgovABlue4: '#003bee',

            // BC GOV GOLD PALETTE
            BCgovGold0: '#fff7e3',
            BCgovGold1: '#feeaba',
            BCgovGold2: '#fedd8c',
            BCgovGold3: '#fdcf5e',
            BCgovGold4: '#fcc43c',
            BCgovGold5: '#fcba19', // PRIMARY GOLD
            BCgovGold6: '#fcb316',
            BCgovGold7: '#fbab12',
            BCgovGold8: '#fba30e',
            BCgovGold9: '#fa9408',

            // Accent Gold
            BCgovAGold1: '#ffffff',
            BCgovAGold2: '#FFF8EF',
            BCgovAGold3: '#FFE0BC',
            BCgovAGold4: '#FFD4A2',

            // Error Colors
            BCgovInputError: '#ff5252',

            // Form Inputs
            BCgovInputBG: '#ffffff',

            // Font Colors
            BCgovFontColorInverted: ' #ffffff',

            // Links
            BCgovLink: '#1a5a96'
          },
          typography: ({ theme }) => ({
            BCGovGray: {
              css: {
                '--tw-prose-body': theme('colors.gray7'),
                '--tw-prose-headings': theme('colors.gray9'),
                '--tw-prose-counters': theme('colors.gray9'),
                '--tw-prose-bullets': theme('colors.gray9'),
                '--tw-prose-code': theme('colors.gray9'),
                '--tw-prose-pre-code': theme('colors.gray9'),
                '--tw-prose-pre-bg': theme('colors.white')
              }
            }
          })
        }
      }
    }
  }
})
