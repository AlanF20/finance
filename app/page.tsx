import logo from '../public/logo-large.svg'
import ilustration from '../public/illustration-authentication.svg'
import { textPreset1, textPreset4, textPreset4Bold, textPreset5Bold } from './ui/fonts'

export default function Home() {
  return (
    <>
      <header className="xl:hidden w-full h-[70px] flex items-center justify-center bg-[--grey900] rounded-b-[8px]">
        <img alt='finance logo' src={logo.src} />
      </header>
      <main className='xl:justify-around w-full h-svh flex items-center justify-center'>
        <div >
          <img className='rounded-[12px]' src={ilustration.src} alt='Ilustration from login page.'/>
        </div>
        <section className='w-[90%] max-w-[560px] bg-[--white] px-[20px] py-[24px] flex flex-col gap-[32px] rounded-[12px]'>
          <h3 className={`${textPreset1}`}>Login</h3>
          <form className='w-full flex flex-col gap-[16px]'>
            <label className='flex flex-col'>
              <span className={`${textPreset5Bold} text-[--grey500]`}>Email</span>
              <input className='border border-[--beige500] rounded-[8px] p-[16px]'></input>
            </label>
            <label className='flex flex-col'>
              <span className={`${textPreset5Bold} text-[--grey500]`}>Password</span>
              <input className='border border-[--beige500] rounded-[8px] p-[16px]'></input>
            </label>
            <button className={`bg-[--grey900] ${textPreset4Bold} text-[--white] p-[16px] rounded-[8px]`}>Login</button>
          </form>
          <p className={`w-full text-center ${textPreset4} text-[--grey500]`}>Need to create an account?  <span className={`${textPreset4Bold} text-[--grey900] underline`}>Sign up</span></p>
        </section>
      </main>
    </>
  )
}
