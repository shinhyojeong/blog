import path from 'path'
import { createPages } from './gatsby/create-pages'
import type { CreateWebpackConfigArgs } from 'gatsby'

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
        '~/hooks/*': getPath('/hooks/*'),
        '~/hooks': getPath('/hooks'),
        '~/layout/*': getPath('/layout/*'),
        '~/layout': getPath('/layout'),
        '~/styles/*': getPath('/styles/*'),
        '~/styles': getPath('/styles'),
        '~/utils/*': getPath('/utils/*'),
        '~/utils': getPath('/utils')
      }
    }
  })
}

exports.createPages = createPages
