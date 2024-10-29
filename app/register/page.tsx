import Link from 'next/link'
import logo from '../../public/logo-large.svg'
import { textPreset1, textPreset4, textPreset4Bold, textPreset5, textPreset5Bold } from '../ui/fonts'

export default function Register() {
	return (
		<>
			<header className="lg:hidden w-full h-[70px] flex items-center justify-center bg-[--grey900] rounded-b-[8px]">
				<img alt='finance logo' src={logo.src} />
			</header>
			<main className='lg:justify-evenly w-full h-svh flex items-center justify-center'>
				<div className="hidden lg:flex flex-col justify-between bg-[url('../../public/illustration-authentication.svg')] p-14 w-[560px] h-[920px] bg-no-repeat rounded-[12px]">
					<img className='w-[120px]' src={logo.src} alt='finance logo' />
					<div className='flex flex-col gap-[15px]'>
						<h3 className={`${textPreset1} text-[--white]`}>Keep track of your money and save for your futurue</h3>
						<p className={`${textPreset4} text-[--white]`}>Personal finance app puts you in control of you spendings. Track transactions, set budgets, and add to savings pots easily.</p>
					</div>
				</div>
				<section className='w-[90%] max-w-[560px] bg-[--white] px-[20px] py-[24px] flex flex-col gap-[32px] rounded-[12px]'>
					<h3 className={`${textPreset1}`}>Sign Up</h3>
					<form className='w-full flex flex-col gap-[16px]'>
						<label className='flex flex-col'>
							<span className={`${textPreset5Bold} text-[--grey500]`}>Name</span>
							<input type='text' className='border border-[--beige500] rounded-[8px] p-[16px]'></input>
						</label>
						<label className='flex flex-col'>
							<span className={`${textPreset5Bold} text-[--grey500]`}>Email</span>
							<input type='email' className='border border-[--beige500] rounded-[8px] p-[16px]'></input>
						</label>
						<label className='flex flex-col'>
							<span className={`${textPreset5Bold} text-[--grey500]`}>Create Password</span>
							<input type='password' className='border border-[--beige500] rounded-[8px] p-[16px]'></input>
							<span className={`${textPreset5} text-[--grey500] place-self-end`}>Passwords must be at least 8 characters</span>
						</label>
						<button className={`bg-[--grey900] ${textPreset4Bold} text-[--white] p-[16px] rounded-[8px]`}>Create Account</button>
					</form>
					<p className={`w-full text-center ${textPreset4} text-[--grey500]`}>Already have an account?  <Link href={'/'} className={`${textPreset4Bold} text-[--grey900] underline`}>Login</Link></p>
				</section>
			</main>
		</>
	)
}
