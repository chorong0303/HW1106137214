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

const SalesdetailListResults = ({ salesdetail, ...rest }) => {
  const [selectedSalesdetailIds, setSelectedSalesdetailIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedSalesdetailIds;

    if (event.target.checked) {
      newSelectedSalesdetailIds = salesdetail.map((salesdetails) => salesdetails.id);
    } else {
      newSelectedSalesdetailIds = [];
    }

    setSelectedSalesdetailIds(newSelectedSalesdetailIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedSalesdetailIds.indexOf(id);
    let newSelectedSalesdetailIds = [];

    if (selectedIndex === -1) {
      newSelectedSalesdetailIds = newSelectedSalesdetailIds.concat(selectedSalesdetailIds, id);
    } else if (selectedIndex === 0) {
      newSelectedSalesdetailIds = newSelectedSalesdetailIds.concat(selectedSalesdetailIds.slice(1));
    } else if (selectedIndex === selectedSalesdetailIds.length - 1) {
      newSelectedSalesdetailIds = newSelectedSalesdetailIds.concat(selectedSalesdetailIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedSalesdetailIds = newSelectedSalesdetailIds.concat(
        selectedSalesdetailIds.slice(0, selectedIndex),
        selectedSalesdetailIds.slice(selectedIndex + 1)
      );
    }

    setSelectedSalesdetailIds(newSelectedSalesdetailIds);
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
                    checked={selectedSalesdetailIds.length === salesdetail.length}
                    color="primary"
                    indeterminate={
                      selectedSalesdetailIds.length > 0
                      && selectedSalesdetailIds.length < salesdetail.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>
                  訂單編號
                </TableCell>
                <TableCell>
                  產品編號
                </TableCell>
                <TableCell>
                  數量
                </TableCell>
                <TableCell>
                  折扣
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {salesdetail.slice(0, limit).map((salesdetails) => (
                <TableRow
                  hover
                  key={salesdetails.id}
                  selected={selectedSalesdetailIds.indexOf(salesdetails.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedSalesdetailIds.indexOf(salesdetails.id) !== -1}
                      onChange={(event) => handleSelectOne(event, salesdetails.id)}
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
                        src={salesdetails.avatarUrl}
                        sx={{ mr: 2 }}
                      >
                        {getInitials(salesdetails.name)}
                      </Avatar>
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {salesdetails.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {salesdetails.email}
                  </TableCell>
                  <TableCell>
                    {`${salesdetails.address.city}, ${salesdetails.address.state}, ${salesdetails.address.country}`}
                  </TableCell>
                  <TableCell>
                    {salesdetails.phone}
                  </TableCell>
                  <TableCell>
                    {moment(salesdetails.createdAt).format('DD/MM/YYYY')}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={salesdetail.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

SalesdetailListResults.propTypes = {
  salesdetail: PropTypes.array.isRequired
};

export default SalesdetailListResults;
