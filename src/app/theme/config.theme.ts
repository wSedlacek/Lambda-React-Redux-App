import { createMuiTheme } from '@material-ui/core';
import { deepPurple } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: deepPurple,
  },
});

export { theme };
