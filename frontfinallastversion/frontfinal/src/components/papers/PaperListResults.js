import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { useContext } from 'react';
import { AppContext } from 'src/Context';

const PaperListResults = () => {
  const {
    orderdetile
  } = useContext(AppContext);

  return (
    <Card>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  客戶代號
                </TableCell>
                <TableCell>
                  客戶名稱
                </TableCell>
                <TableCell>
                  總銷售金額
                </TableCell>
                <TableCell>
                  總利潤
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { orderdetile.map(
                (
                  {
                    customername, customerid, allprice, alldiscountcost
                  }
                ) => {
                  return (
                    <TableRow>
                      <TableCell>
                        {customerid}
                      </TableCell>
                      <TableCell>
                        {customername}
                      </TableCell>
                      <TableCell>
                        {allprice}
                      </TableCell>
                      <TableCell>
                        {alldiscountcost}
                      </TableCell>
                    </TableRow>
                  );
                }
              )}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
    </Card>);
};

export default PaperListResults;
