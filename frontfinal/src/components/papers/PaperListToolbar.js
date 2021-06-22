import {
  Box,
  Card,
  CardContent,
  TextField,
  Typography,
  Button,
} from '@material-ui/core';
import { Formik } from 'formik';
import { useContext } from 'react';
import { AppContext } from 'src/Context';

const PaperListToolbar = (props) => {
  const {
    searchOrder
  } = useContext(AppContext);
  return (
    <Box {...props}>
      <Box>
        <Card>
          <CardContent>
            <Formik
              initialValues={{
                date1: '',
                date2: ''
              }}
              onSubmit={(value) => {
                searchOrder(value);
              }}
            >
              {({
                handleBlur,
                handleChange,
                handleSubmit,
                values
              }) => (
                <form onSubmit={handleSubmit}>
                  <Box
                    sx={{
                      pb: 1,
                      pt: 3
                    }}
                  >
                    <Typography
                      align="center"
                      color="textSecondary"
                      variant="body1"
                    >
                      客戶報表查詢
                    </Typography>
                  </Box>
                  <TextField
                    margin="normal"
                    name="date1"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="date"
                    value={values.date1}
                    variant="outlined"
                  />
                  <TextField
                    margin="normal"
                    name="date2"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="date"
                    value={values.date2}
                    variant="outlined"
                  />
                  <Box sx={{ py: 2 }}>
                    <Button
                      color="primary"
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                    >
                      送出
                    </Button>
                  </Box>
                </form>
              )}
            </Formik>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default PaperListToolbar;
