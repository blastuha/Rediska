import React, { FC, ReactElement } from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import { GrFacebookOption, GrTwitter } from 'react-icons/gr'
import { Link } from 'react-router-dom'

export const Footer: FC = (): ReactElement => {
  return (
    <footer>
      <div className='flex items-center bg-[#F9F9F9] py-12 pl-4 pr-4 xs:mt-8 md:mt-14'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:text-start lg:grid-cols-3'>
            <div className='w-full'>
              <ul>
                <li className='text-black mb-5 font-dancingScript text-4xl font-bold '>Rediska</li>
                <li>
                  <a href='mailto:MiladSadeghi2323@gmail.com' className='mb-1 block text-[#7F7F7F]'>
                    shevnin.boris2@gmail.com
                  </a>
                  <a
                    href='https://t.me/blasterblast'
                    rel='noreferrer'
                    target='_blank'
                    className='text-base text-[#7F7F7F]'
                  >
                    telegram: @blasterblast
                  </a>
                </li>
              </ul>
            </div>
            <div className='flex flex-col items-center'>
              <div>
                <h5 className='mb-6 font-dancingScript text-2xl font-semibold'>Social Media</h5>
                <ul className='font-inter text-[#7F7F7F]'>
                  <li className='footer-li'>
                    <Link to='https://www.instagram.com/' target='_blank'>
                      Instagram
                    </Link>
                  </li>
                  <li className='footer-li'>
                    <Link to='https://www.youtube.com/' target='_blank'>
                      YouTube
                    </Link>
                  </li>
                  <li className='footer-li'>
                    <Link to='https://t.me/blasterblast' target='_blank'>
                      Telegram
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='flex flex-col items-center sm:items-start lg:items-center'>
              <div>
                <h5 className='mb-6 font-dancingScript text-2xl font-semibold'>Pages</h5>
                <ul className='font-inter text-[#7F7F7F]'>
                  <li className='footer-li'>
                    <Link to='instagram.com' target='_blank'>
                      Главная
                    </Link>
                  </li>
                  <li className='footer-li'>
                    <Link to='/recipes'>Рецепты</Link>
                  </li>
                  <li className='footer-li'>
                    <Link to='/about'>О проекте</Link>
                  </li>
                  <li className='footer-li'>
                    <Link to='/user'>Личный кабинет</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#F9F9F9] py-2 pl-4 pr-4'>
        <div className='container mx-auto flex flex-wrap justify-between'>
          <p className='font-dancingScript text-lg text-[#9DA0AE]'>Rediska - All Rights Reserved</p>
          <div className='flex items-center'>
            <Link to='https://www.instagram.com/' target='_blank'>
              <AiFillInstagram className=' mr-4 cursor-pointer   rounded-full text-2xl' />
            </Link>
            <Link to='https://www.facebook.com/' target='_blank'>
              <GrFacebookOption className=' mr-4 cursor-pointer  rounded-full text-2xl' />
            </Link>
            <Link to='https://www.twitter.com/' target='_blank'>
              <GrTwitter className=' mr-4 cursor-pointer  rounded-full text-2xl' />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
