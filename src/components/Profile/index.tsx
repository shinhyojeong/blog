import { text } from '~/styles/mixins'
import { cn } from '~/utils/cn'
import { Box } from '../Box'

type About = {
  label: string
  link: string
}

const aboutList: About[] = [
  {
    label: '📁 Github',
    link: 'https://github.com/shinhyojeong'
  },
  {
    label: '🔗 LinkedIn',
    link: 'https://www.linkedin.com/in/hyojeong-shin-b7953a240/'
  },
  {
    label: '📨 Email',
    link: 'mailto:shinhyojeong.w@gmail.com'
  }
]

export const Profile = () => (
  <div className="flex flex-col gap-4">
    <Box>
      <img
        alt="profile"
        className="rounded-full"
        height="100px"
        src="images/profile.jpeg"
        width="100px"
      />
      <p className="mt-4 text-base font-bold tracking-widest">Hyojeong Shin</p>
      <p className="text-sm leading-5 text-zinc-500">
        {`Hi there 👋 I'm Hyojeong, a frontend developer.`}
      </p>
    </Box>
    <Box className="flex flex-col gap-3">
      <span className="mb-1 text-base font-bold tracking-widest">Contact</span>
      {aboutList.map(({ link, label }) => (
        <li key={label} className="list-none">
          <a
            className={cn(
              'flex items-center gap-3 text-sm font-semibold underline',
              text.hoverDecoration
            )}
            href={link}
            rel="noopener noreferrer"
            target="_blank">
            <span>{label}</span>
          </a>
        </li>
      ))}
    </Box>
  </div>
)
