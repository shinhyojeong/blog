import { CreateWebpackConfigArgs } from 'gatsby'
import path from 'path'

const BASE_URL = './src'

const getPath = (customPath: string) =>
  path.resolve(__dirname, `${BASE_URL}${customPath}`)

exports.onCreateWebpackConfig = ({ actions }: CreateWebpackConfigArgs) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '~/components/*': getPath('/components/*'),
        '~/components': getPath('/components'),
        '~/constants/*': getPath('/constants/*'),
        '~/constants': getPath('/constants'),
        '~/styles/*': getPath('/styles/*'),
        '~/styles': getPath('/styles')
      }
    }
  })
}
