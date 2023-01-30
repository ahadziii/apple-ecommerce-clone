// We import object and document schemas
import products from './products'
import category from './category'
import blockContent from './blockContent'

import localeString from './locale/String'
import localeText from './locale/Text'
import localeBlockContent from './locale/BlockContent'
import {user, account} from 'next-auth-sanity/schemas'

export const schemaTypes = [
  products,
  category,
  blockContent,
  localeBlockContent,
  localeString,
  localeText,
  user,
  account,
]
