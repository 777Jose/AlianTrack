/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#EA5B0C',
        secondary: '#08111f',
        accent: '#FFF4EF',
        surface: '#F8FAFC',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(2, 6, 23, 0.08)',
      },
      backgroundImage: {
        hero: "linear-gradient(90deg, rgba(3,7,18,0.88) 0%, rgba(3,7,18,0.68) 45%, rgba(3,7,18,0.25) 100%), url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1600&q=80')",
        process: 'radial-gradient(circle at top, rgba(26,76,163,0.35), transparent 40%), linear-gradient(135deg, #020617 0%, #08111f 55%, #0b1530 100%)',
        cta: 'linear-gradient(135deg, #0B1220 0%, #08111f 45%, #0b2659 100%)'
      }
    },
  },
  plugins: [],
}
