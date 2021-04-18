import { createMuiTheme } from '@material-ui/core'
import { TypographyOptions } from '@material-ui/core/styles/createTypography'
import palette from './palette'
import typography from './typography'
import overrides from './overrides'
import { PaletteOptions } from '@material-ui/core/styles/createPalette'
import {} from '@material-ui/core/styles/createMuiTheme'
import { Overrides } from '@material-ui/core/styles/overrides'

const baseTheme:{palette:PaletteOptions, typography:TypographyOptions, overrides:Overrides} = {
  palette,
  typography,
  overrides
}

export const theme = createMuiTheme(baseTheme)
