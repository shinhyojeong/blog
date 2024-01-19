import { Divider, Preview, Profile } from '~/components'
import { Layout } from '~/layout'

const MOCKS = Array.from({ length: 20 }, () => ({
  title: 'TEST 파일입니다',
  content:
    'TEST 파일입니다TEST 파일입니다TEST 파일입니다TEST 파일입니다TEST 파일입니다TEST 파일입니다TEST 파일입니다TEST 파일입니다TEST 파일입니다TEST 파일입니다TEST 파일입니다TEST 파일입니다TEST 파일입니다TEST 파일입니다TEST 파일입니다TEST 파일입니다TEST 파일입니다TEST 파일입니다TEST 파일입니다TEST 파일입니다TEST 파일입니다TEST 파일입니다TEST 파일입니다TEST 파일입니다TEST 파일입니다TEST 파일입니다TEST 파일입니다TEST 파일입니다TEST 파일입니다TEST 파일입니다',
  date: '2022.1.1'
}))

const main = () => (
  <Layout>
    <div className="fixed h-full w-80 border-r border-solid border-gray-200 p-6 pl-0">
      <Profile />
    </div>
    <div className="ml-80 p-6 pr-0">
      {MOCKS.map((props, idx) => (
        <>
          <Preview key={idx} {...props} />
          {idx !== MOCKS.length - 1 && <Divider gap={12} />}
        </>
      ))}
    </div>
  </Layout>
)

export default main
