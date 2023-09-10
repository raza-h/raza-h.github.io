import github from '../assets/images/github.svg'
import linkedin from '../assets/images/linkedin.svg'
import downIcon from '../assets/images/down-icon.svg'

export default function Footer() {
  return (
    <footer className = "py-5 text-[#5a5959] items-center bg-[#cac7bd] px-2.5 flex justify-between w-[100%]">
      <div className='flex space-x-3'>
        <a target = "_blank" rel = "noreferrer" href = "https://github.com/dork-writes"><img alt = "github" src = {github} width = "30rem"/></a>
        <a target = "_blank" rel = "noreferrer" href = "https://linkedin.com/in/razah1214"><img alt = "linkedin" src = {linkedin} width = "30rem"/></a>
      </div>
      <a href="#top" className='w-[50%]'>
        <figure className='flex space-x-1 w-fit mx-auto hover:translate-y-[-2px] transition-all'>
          <img alt = "top" src = {downIcon} width="20rem" className='transform rotate-180' />
          <figcaption>Back To Top</figcaption>
        </figure>
      </a>
      <p>©️ RH '23</p>
    </footer>
  )
}
