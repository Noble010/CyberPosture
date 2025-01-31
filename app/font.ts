import localFont from "next/font/local"
import {Inter} from "next/font/google"

export const inter = Inter({
    subsets: ["latin"],
    display:"swap",
    variable: "--font-inter"
})

// export const rufina = localFont({
//     src: [
//       {
//         path: '/fonts/rufina-regular',
//         weight: '400',
//         style: 'normal',
//       },
//       {
//         path: '/fonts/rufina-bold',
//         weight: '700',
//         style: 'normal',
//       },
//     ],
//     variable: '--font-rufina', // Optional variable for custom CSS
//   });