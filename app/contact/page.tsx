import React from 'react'
import { MdEmail } from 'react-icons/md'
import { MdPhone } from 'react-icons/md'
import { DiGithub } from 'react-icons/di'

const Contact = () => {
  return (
    <div>
      <article className='flex flex-col items-center justify-center p-10 lg:px-20'>
        <h1 className='font-semibold p-10 text-4xl'>Looking For A Developer?</h1>
        <div className='pt-10'>
          <table className='text-2xl leading-10 tracking-wider py-10 text-blue-900'>
            <tr className='p-2'>
              <td className='px-2'>
                <a className='hover:text-blue-600' href= "mailto: richardmarmolejo@gmail.com ?subject=Developer Portfolio Inquiry  &body=This email was generated from RichMarmolejo.com /n">
                  {<MdEmail className='text-2xl'/>}
                </a>
              </td>
              <td className='px-2'>
                <a className='hover:text-blue-600' href= "mailto: richardmarmolejo@gmail.com ?subject=Developer Portfolio Inquiry  &body=This email was generated from RichMarmolejo.com /n">RichardMarmolejo@gmail.com</a> 
              </td>
            </tr>
            <tr className='p-2'>
              <td className='px-2'>
                <a className='hover:text-blue-600' href="tel:+14846309719">
                  {<MdPhone className='text-2xl'/>}
                </a>
              </td>
              <td className='px-2'>
                <a className='hover:text-blue-600' href="tel:+14846309719">(484)630-9719</a>
              </td>
            </tr>
            <tr className='p-2'>
              <td className='px-2'>
                <a className='hover:text-blue-600' href="http://github.com/RMarmolejo90">
                  {<DiGithub className='text-4xl'/>}
                </a>
              </td>
              <td className='px-2'>
                <a className='hover:text-blue-600' href="http://github.com/RMarmolejo90">Github</a>
              </td>
            </tr>
          </table>
        </div>
      </article>
    </div>
  )
}

export default Contact