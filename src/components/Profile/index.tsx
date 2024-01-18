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
  <div className="min-w-[304px]">
    <img
      className="rounded-full"
      height="100px"
      src="images/profile.jpeg"
      width="100px"
    />
    <p className="mt-4 text-lg font-bold">Hyojeong Shin</p>
    <p className="text-base leading-5 text-zinc-500">
      {`Hi there 👋 I'm Hyojeong, a frontend developer.`}
    </p>
    <div className="mt-6 flex gap-1">
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
