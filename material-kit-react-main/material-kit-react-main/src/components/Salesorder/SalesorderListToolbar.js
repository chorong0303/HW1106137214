import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';
import { useNavigate } from 'react-router-dom';

const SalesorderListToolbar = (props) => {
  const navigate = useNavigate();
  function addsalesorder(e) {
    e.preventDefault();
    console.log('The link was clicked.');
    navigate('/app/Addsalesorder', { replace: true });
  }
  function updatesalesorder(e) {
    e.preventDefault();
    console.log('The link was clicked.');
    navigate('/app/Updatesalesorder', { replace: true });
  }
  return (
    <Box {...props}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end'
        }}
      >
        <Button>
          Select
        </Button>
        <Button>
          Delete
        </Button>
        <Button
          sx={{ mx: 1 }}
          onClick={updatesalesorder}
          color="primary"
          variant="contained"
        >
          Update
        </Button>
        <Button
          onClick={addsalesorder}
          color="primary"
          variant="contained"
        >
          Add salesorder
        </Button>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Card>
          <CardContent>
            <Box sx={{ maxWidth: 500 }}>
              <TextField
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon
                        fontSize="small"
                        color="action"
                      >
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  )
                }}
                placeholder="Search salesorder"
                variant="outlined"
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default SalesorderListToolbar;