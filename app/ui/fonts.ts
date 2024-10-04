import localFont from 'next/font/local'

export const PublicSans = localFont({
  src: './fonts/PublicSans-VariableFont_wght.ttf',
  display: 'swap'
})

export const textPreset1 = `${PublicSans.className} text-[32px] font-bold leading-[120%]`
export const textPreset2 = `${PublicSans.className} text-[20px] font-bold leading-[120%]`
export const textPreset3 = `${PublicSans.className} text-[16px] font-bold leading-[150%]`
export const textPreset4 = `${PublicSans.className} text-[14px] leading-[150%]`
export const textPreset4Bold = `${PublicSans.className} text-[14px] font-bold leading-[150%]`
export const textPreset5 = `${PublicSans.className} text-[12px] leading-[150%]`
export const textPreset5Bold = `${PublicSans.className} text-[12px] font-bold leading-[150%]`

