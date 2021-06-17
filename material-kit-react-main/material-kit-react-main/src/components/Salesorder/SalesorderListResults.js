import { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@material-ui/core';
import getInitials from 'src/utils/getInitials';

const SalesorderListResults = ({ salesorder, ...rest }) => {
  const [selectedSalesorderIds, setSelectedSalesorderIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedSalesorderIds;

    if (event.target.checked) {
      newSelectedSalesorderIds = salesorder.map((salesorders) => salesorders.id);
    } else {
      newSelectedSalesorderIds = [];
    }

    setSelectedSalesorderIds(newSelectedSalesorderIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedSalesorderIds.indexOf(id);
    let newSelectedSalesorderIds = [];

    if (selectedIndex === -1) {
      newSelectedSalesorderIds = newSelectedSalesorderIds.concat(selectedSalesorderIds, id);
    } else if (selectedIndex === 0) {
      newSelectedSalesorderIds = newSelectedSalesorderIds.concat(selectedSalesorderIds.slice(1));
    } else if (selectedIndex === selectedSalesorderIds.length - 1) {
      newSelectedSalesorderIds = newSelectedSalesorderIds.concat(selectedSalesorderIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedSalesorderIds = newSelectedSalesorderIds.concat(
        selectedSalesorderIds.slice(0, selectedIndex),
        selectedSalesorderIds.slice(selectedIndex + 1)
      );
    }

    setSelectedSalesorderIds(newSelectedSalesorderIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedSalesorderIds.length === salesorder.length}
                    color="primary"
                    indeterminate={
                      selectedSalesorderIds.length > 0
                      && selectedSalesorderIds.length < salesorder.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>
                  日期
                </TableCell>
                <TableCell>
                  單號
                </TableCell>
                <TableCell>
                  客戶名稱
                </TableCell>
                <TableCell>
                  業務名稱
                </TableCell>
                <TableCell>
                  運送方式
                </TableCell>
                <TableCell>
                  總金額
                </TableCell>
                <TableCell>
                  完成
                </TableCell>
                <TableCell>
                  備註
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {salesorder.slice(0, limit).map((salesorders) => (
                <TableRow
                  hover
                  key={salesorders.id}
                  selected={selectedSalesorderIds.indexOf(salesorders.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedSalesorderIds.indexOf(salesorders.id) !== -1}
                      onChange={(event) => handleSelectOne(event, salesorders.id)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      <Avatar
                        src={salesorders.avatarUrl}
                        sx={{ mr: 2 }}
                      >
                        {getInitials(salesorders.name)}
                      </Avatar>
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {salesorders.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {salesorders.email}
                  </TableCell>
                  <TableCell>
                    {`${salesorders.address.city}, ${salesorders.address.state}, ${salesorders.address.country}`}
                  </TableCell>
                  <TableCell>
                    {salesorders.phone}
                  </TableCell>
                  <TableCell>
                    {moment(salesorders.createdAt).format('DD/MM/YYYY')}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={salesorder.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

SalesorderListResults.propTypes = {
  salesorder: PropTypes.array.isRequired
};

export default SalesorderListResults;
