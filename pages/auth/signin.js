import {getProviders, signIn} from 'next-auth/react';
import Header from '../../components/Header';

export default function signin({providers}) {
  return <>
    <Header/>
    <div className='flex justify-center space-x-7 mt-20'>
        <img className='hidden object-cover rotate-6 md:inline-flex' src='https://superviral.com.au/wp-content/uploads/2021/08/instagix-banner-graphic.png' alt='instagram-image' />
        <div className=''>
            {Object.values(providers).map((provider) => (
                <div key={provider.name} className='flex flex-col items-center'>
                    <img className='w-32 object-cover' src='https://surulerelife.com/wp-content/uploads/2018/07/instagram-png-instagram-logo-2-png-8-de-abril-de-2017-927-kb-3500-3393-3500.png' alt='instagram-logo' />
                    <p className='text-sm italic my-10 text-center'>This app is created for learning purposes</p>
                    <button onClick={() => signIn(provider.id, {callbackUrl: "/"})} className='bg-red-400 rounded-lg p-3 text-white hover:bg-red-500'>Sign in witn {provider.name}</button>
                </div>
            ))}
        </div>
    </div>
  </>;
}

export async function getServerSideProps(context) {
    const providers = await getProviders();
    return {
        props: {providers}
    }
}