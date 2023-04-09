import Links from './Links'

export default function MobileLinks (): JSX.Element {
  return (
    <ul className='flex flex-col items-center justify-between min-h-[250px]'>
      <Links classes='border-b border-gray-400 my-8 uppercase' />
    </ul>
  )
}
