import path from 'path'
import type { CreatePagesArgs, CreateWebpackConfigArgs } from 'gatsby'

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

exports.createPages = ({ actions }: CreatePagesArgs) => {
  actions.createPage({
    path: '/',
    component: path.resolve('./src/templates/home.tsx')
  })
}
