import { Icon } from '../Icon'
import type { IconKeys } from '~/constants'

type About = {
  icon: IconKeys
  link: string
}

const aboutList: About[] = [
  {
    icon: 'GITHUB',
    link: 'https://github.com/shinhyojeong'
  },
  {
    icon: 'LINKEDIN',
    link: 'https://www.linkedin.com/in/hyojeong-shin-b7953a240/'
  },
  {
    icon: 'EMAIL',
    link: 'mailto:shinhyojeong.w@gmail.com'
  }
]

export const Profile = () => (
  <div>
    <img
      className="rounded-full"
      height="88px"
      src="images/profile.jpeg"
      width="88px"
    />
    <p className="text-lg font-bold">Hyojeong Shin</p>
    <p className="text-base text-zinc-500">
      {`Hi there 👋 I'm Hyojeong, a frontend developer.`}
    </p>
    <div className="mt-3 flex gap-1">
      {aboutList.map(({ icon, link }) => (
        <li key={icon} className="list-none">
          <a href={link} rel="noopener noreferrer" target="_blank">
            <Icon type={icon} width={24} />
          </a>
        </li>
      ))}
    </div>
  </div>
)
